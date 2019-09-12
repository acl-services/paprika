import uuidv4 from "uuid/v4";
import superagent from "superagent";
import types from "./types";

function getFileSize(file) {
  const size = file.size;

  const aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let nMultiple = 0;
  let sOutput = "";
  // this calculate Kibebytes, Mebibyes, etc.
  // But are being label as KB and MB for easier understanding.
  for (let nApprox = size / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = `${nApprox} ${aMultiples[nMultiple]}`;
  }

  return sOutput;
}

export function fileSizeUnitsToHumanReadableFormat(size) {
  const aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let nMultiple = 0;
  let sOutput = "";
  // this calculate Kibebytes, Mebibyes, etc.
  // But are being label as KB and MB for easier understanding.
  for (let nApprox = size / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = `${nApprox} ${aMultiples[nMultiple]}`;
  }

  return sOutput;
}

function getExtension({ file }) {
  const filename = file.name;
  return filename.substr((~-filename.lastIndexOf(".") >>> 0) + 2); // eslint-disable-line
}

function isValidFileType({ file, acceptableFileTypes }) {
  const validMimeType = (validFiles, type) => {
    const mimetype = type.split("/");
    if (mimetype.length > 0) {
      return validFiles.indexOf(mimetype[0].toUpperCase()) > -1;
    }
    return false;
  };

  if (acceptableFileTypes.length === 1 && acceptableFileTypes[0] === "*/*") {
    return true;
  }
  // copy/pasta from acl-ui-3
  // http://stackoverflow.com/a/1203361/196038
  const validFiles = acceptableFileTypes.join("").toUpperCase();
  const extension = getExtension({ file });

  return validFiles.indexOf(extension.toUpperCase()) > -1 || validMimeType(validFiles, file.type);
}

function isValidFile({ file, maximumFileSize, acceptableFileTypes }) {
  const validation = {
    isServerValid: true, // this will be modify by the server in case failed
    isSizeValid: file.size <= maximumFileSize,
    isTypeValid: isValidFileType({ file, acceptableFileTypes }),
  };

  validation.isValid = [validation.isSizeValid, validation.isTypeValid].every(rule => rule);

  return validation;
}

function createFilesDataStructure({ files, maximumFileSize, acceptableFileTypes }) {
  return [...files].map(file => {
    const key = uuidv4();
    return {
      key,
      ...isValidFile({ file, maximumFileSize, acceptableFileTypes }),
      extension: getExtension({ file }),
      file,
      filename: file.name,
      progress: 0,
      request: null,
      status: types.IDLE,
      units: getFileSize({ file, maximumFileSize, acceptableFileTypes }),
      unitsWithFormat: fileSizeUnitsToHumanReadableFormat(file.size),
    };
  });
}

export function upload({ url, file, data = {}, refInput }) {
  const formData = new FormData();
  formData.append("file", file.file);
  formData.append("data", JSON.stringify(data));

  const _superagent = superagent.post(url);

  const headers = [];
  //
  headers.forEach(header => {
    _superagent.set(header.type, header.value);
  });

  _superagent
    .send(formData)
    .on("progress", ({ percent }) => {
      if (percent) {
        console.log(percent);
      }
    })
    .end((err, res) => {
      // Calling the end function will send the request
    });
  // reset when done so can upload the same file twice in a row
  refInput.current.value = ""; // eslint-disable-line
}

export function getFiles({ event, maximumFileSize, acceptableFileTypes }) {
  // this is required to persist the real event since the synthetic was release
  // at the moment of the user canceling a selected file from the OS browser explorer
  if ("persist" in event) {
    // if is drag and drop is not longer a synthetic event
    event.persist();
  }

  if ((event.target && event.target.files) || (event.dataTransfer && event.dataTransfer.files)) {
    let files = [];
    if (event.dataTransfer) {
      files = event.dataTransfer.files;
    } else {
      files = event.target.files;
    }

    return createFilesDataStructure({ files, maximumFileSize, acceptableFileTypes });
  }

  return [];
}
