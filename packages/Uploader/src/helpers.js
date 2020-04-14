import uuidv4 from "uuid/v4";
import superagent from "superagent";
import types from "./types";

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

  if (extension === "") {
    return false;
  }

  return validFiles.indexOf(extension.toUpperCase()) > -1 || validMimeType(validFiles, file.type);
}

function isValidFile({ file, maxFileSize, okFileTypes }) {
  const validation = {
    isServerValid: true, // this will be true unless failed when uploading the file
    isSizeValid: file.size <= maxFileSize,
    isTypeValid: isValidFileType({ file, okFileTypes }),
  };

  validation.isValid = validation.isSizeValid && validation.isTypeValid;

  return validation;
}

export function getNumberWithUnits(number) {
  if (number > 1024) {
    if (number > 1024 * 1024) {
      if (number > 1024 * 1024 * 1024) {
        if (number > 1024 * 1024 * 1024 * 1024) {
          return `${(number / (1024 * 1024 * 1024 * 1024)).toFixed(3)}TiB`;
        }
        return `${(number / (1024 * 1024 * 1024)).toFixed(2)}GiB`;
      }
      return `${(number / (1024 * 1024)).toFixed(1)}MiB`;
    }
    return `${parseInt(number / 1024, 10)}KiB`;
  }

  return `${parseInt(number, 10)}B`;
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
      filesizeHumanize: getNumberWithUnits(file.size),
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

  if (headers && headers.length) {
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
