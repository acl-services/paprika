import { v4 as uuidv4 } from "uuid";
import superagent from "superagent";
import * as types from "./types";

function getExtension({ file }) {
  const filename = file.name;
  return filename.substr((~-filename.lastIndexOf(".") >>> 0) + 2); // eslint-disable-line
}

function isValidFileType({ file, supportedMimeTypes }) {
  const validMimeType = (validFiles, type) => {
    const mimetype = type.split("/");
    if (mimetype.length > 0) {
      return validFiles.indexOf(mimetype[0].toUpperCase()) > -1;
    }
    return false;
  };

  if (supportedMimeTypes.length === 1 && supportedMimeTypes[0] === "*/*") {
    return true;
  }
  // copy/pasta from acl-ui-3
  // http://stackoverflow.com/a/1203361/196038
  const validFiles = supportedMimeTypes.join("").toUpperCase();
  const extension = getExtension({ file });

  return validFiles.indexOf(extension.toUpperCase()) > -1 || validMimeType(validFiles, file.type);
}

function isValidFile({ file, maxFileSize, supportedMimeTypes }) {
  const validation = {
    isServerValid: true, // this will be true unless failed when uploading the file
    isSizeValid: file.size <= maxFileSize,
    isTypeValid: isValidFileType({ file, supportedMimeTypes }),
  };

  validation.isValid = validation.isSizeValid && validation.isTypeValid;

  return validation;
}

function createFilesDataStructure({ files, maxFileSize, supportedMimeTypes, endpoint }) {
  return [...files].map(file => {
    const key = uuidv4();
    const fileValidation = isValidFile({ file, maxFileSize, supportedMimeTypes });
    return {
      key,
      ...fileValidation,
      extension: getExtension({ file }),
      file,
      filename: file.name,
      filesize: file.size,
      progress: 0,
      request: superagent.post(endpoint),
      status: fileValidation.isValid ? types.status.IDLE : types.status.ERROR,
      hasError: false,
      errorMessage: null,
      processed: !fileValidation.isValid, // if the file is not valid mean has been processed
    };
  });
}

export function uploadToServer({ file, data = {}, onProgress, onSuccess, onError, headers, onRequest }) {
  const formData = new FormData();
  formData.append("file", file.file);
  formData.append("data", JSON.stringify(data));

  let headerObj = {};
  if (headers.length) {
    headers.forEach(header => {
      headerObj = { ...headerObj, ...header };
    });

    file.request.set(headerObj);
  }

  const onProgressFn = ({ percent }) => {
    if (percent) {
      onProgress({ file, percent });
    }
  };

  const onEndFn = (error, response) => {
    if (error) {
      onError({ file, error });
      return;
    }

    onSuccess({ file, response });
  };

  if (typeof onRequest === "function") {
    onRequest({
      file,
      onProgress: onProgressFn,
      onEnd: onEndFn,
      headers: headerObj,
      data,
      formData,
    });
    return;
  }

  file.request
    .send(formData)
    .on("progress", onProgressFn)
    .end(onEndFn);
}

export function getFiles({ event, maxFileSize, supportedMimeTypes, endpoint }) {
  if ((event.target && event.target.files) || (event.dataTransfer && event.dataTransfer.files)) {
    let files = [];
    if (event.dataTransfer) {
      files = event.dataTransfer.files;
    } else {
      files = event.target.files;
    }

    return createFilesDataStructure({ files, maxFileSize, supportedMimeTypes, endpoint });
  }

  return [];
}

export function getNumberWithUnits(I18n, number) {
  if (number > 1024) {
    if (number > 1024 * 1024) {
      if (number > 1024 * 1024 * 1024) {
        if (number > 1024 * 1024 * 1024 * 1024) {
          return `${(number / (1024 * 1024 * 1024 * 1024)).toFixed(3)}${I18n.t(
            "uploader.size_abbreviations.tebibyte"
          )}`;
        }
        return `${(number / (1024 * 1024 * 1024)).toFixed(2)}${I18n.t("uploader.size_abbreviations.gibibyte")}`;
      }
      return `${(number / (1024 * 1024)).toFixed(1)}${I18n.t("uploader.size_abbreviations.mebibyte")}`;
    }
    return `${parseInt(number / 1024, 10)}${I18n.t("uploader.size_abbreviations.kibibyte")}`;
  }

  return `${parseInt(number, 10)}${I18n.t("uploader.size_abbreviations.byte")}`;
}
