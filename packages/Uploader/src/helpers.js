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

function isValidFileType({ file, okFileTypes }) {
  const validMimeType = (validFiles, type) => {
    const mimetype = type.split("/");
    if (mimetype.length > 0) {
      return validFiles.indexOf(mimetype[0].toUpperCase()) > -1;
    }
    return false;
  };

  if (okFileTypes.length === 1 && okFileTypes[0] === "*/*") {
    return true;
  }
  // copy/pasta from acl-ui-3
  // http://stackoverflow.com/a/1203361/196038
  const validFiles = okFileTypes.join("").toUpperCase();
  const extension = getExtension({ file });

  return validFiles.indexOf(extension.toUpperCase()) > -1 || validMimeType(validFiles, file.type);
}

function isValidFile({ file, maxFileSize, okFileTypes }) {
  const validation = {
    isServerValid: true, // this will be true unless failed when uploading the file
    isSizeValid: file.size <= maxFileSize,
    isTypeValid: isValidFileType({ file, okFileTypes }),
  };

  validation.isValid = [validation.isSizeValid, validation.isTypeValid].every(rule => rule);

  return validation;
}

function createFilesDataStructure({ files, maxFileSize, okFileTypes, endpoint }) {
  return [...files].map(file => {
    const key = uuidv4();
    const fileValidation = isValidFile({ file, maxFileSize, okFileTypes });
    return {
      key,
      ...fileValidation,
      extension: getExtension({ file }),
      file,
      filename: file.name,
      filesize: file.size,
      filesizeHumanize: fileSizeUnitsToHumanReadableFormat(file.size),
      progress: 0,
      request: superagent.post(endpoint),
      status: fileValidation.isValid ? types.IDLE : types.ERROR,
      hasError: false,
      errorMessage: null,
      processed: !fileValidation.isValid, // if the file is not valid mean has been processed
    };
  });
}

export function upload({ file, data = {}, onProgress, onSuccess, onError, headers }) {
  const formData = new FormData();
  formData.append("file", file.file);
  formData.append("data", JSON.stringify(data));

  if (headers.length) {
    let headerObj = {};
    headers.forEach(header => {
      headerObj = { ...headerObj, ...header };
    });

    file.request.set(headerObj);
  }

  file.request
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
    });
}

export function getFiles({ event, maxFileSize, okFileTypes, endpoint }) {
  if ((event.target && event.target.files) || (event.dataTransfer && event.dataTransfer.files)) {
    let files = [];
    if (event.dataTransfer) {
      files = event.dataTransfer.files;
    } else {
      files = event.target.files;
    }

    return createFilesDataStructure({ files, maxFileSize, okFileTypes, endpoint });
  }

  return [];
}
