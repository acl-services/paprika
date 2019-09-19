import uuidv4 from "uuid/v4";
import superagent from "superagent";
import types from "./types";

export function fileSizeUnitsToHumanReadableFormat(size) {
  const aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let nMultiple = 0;
  let sOutput = "";
  // this calculate Kibebytes, Mebibyes, etc.
  // But are being label as KB and MB for easier understanding.
  for (let nApprox = size / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    // fixed to 2 decimals but we could add more if need it
    sOutput = `${nApprox.toFixed(2)} ${aMultiples[nMultiple]}`;
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
    isServerValid: true, // this will be true unless failed when uploading the file
    isSizeValid: file.size <= maximumFileSize,
    isTypeValid: isValidFileType({ file, acceptableFileTypes }),
  };

  validation.isValid = [validation.isSizeValid, validation.isTypeValid].every(rule => rule);

  return validation;
}

function createFilesDataStructure({ files, maximumFileSize, acceptableFileTypes }) {
  return [...files].map(file => {
    const key = uuidv4();
    const fileValidation = isValidFile({ file, maximumFileSize, acceptableFileTypes });
    return {
      key,
      ...fileValidation,
      extension: getExtension({ file }),
      file,
      filename: file.name,
      filesize: file.size,
      filesizeHumanize: fileSizeUnitsToHumanReadableFormat(file.size),
      progress: 0,
      request: null,
      status: fileValidation.isValid ? types.IDLE : types.ERROR,
      hasFinished: false,
      hasError: false,
      errorMessage: null,
      processed: !fileValidation.isValid, // if the file is not valid mean has been processed
    };
  });
}

export function upload({ endpoint, file, data = {}, onProgress, onSuccess, onError }) {
  const formData = new FormData();
  formData.append("file", file.file);
  formData.append("data", JSON.stringify(data));

  const _superagent = superagent.post(endpoint);

  const headers = [];
  //
  headers.forEach(header => {
    _superagent.set(header.type, header.value);
  });

  _superagent
    .send(formData)
    .on("progress", ({ percent }) => {
      if (percent) {
        onProgress({ file, percent });
      }
    })
    .end((error, response) => {
      if (error) {
        onError({ file, error });
        return;
      }

      onSuccess({ file, response });
      // Calling the end function will send the request
    });
}

export function getFiles({ event, maximumFileSize, acceptableFileTypes }) {
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
