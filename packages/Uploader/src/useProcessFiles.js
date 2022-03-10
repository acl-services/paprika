import React from "react";
import * as types from "./types";
import { uploadToServer } from "./helpers";

function getFileByIndex(key, files) {
  let index = null;

  files.some((file, i) => {
    if (file.key === key) {
      index = i;
      return true;
    }
    return false;
  });

  return index !== null ? index : null;
}

const setFile = (file, callback) => files => {
  const cloneFiles = files.slice(0);
  let index = null;
  files.some((f, i) => {
    if (f.key === file.key) {
      index = i;
      return true;
    }
    return false;
  });

  if (index !== null) {
    const updatedFile = callback(cloneFiles[index]);
    cloneFiles[index] = updatedFile;
  }

  return cloneFiles;
};

export default function useProcessFiles({ hasAutoUpload, onProcessed, onCompleted, endpoint, headers, onRequest }) {
  const [uploadingFileList, setUploadingFileList] = React.useState([]);
  const [isBusy, setIsBusy] = React.useState(false);
  const [isCompleted, setisCompleted] = React.useState(null);
  const [files, setFiles] = React.useState([]);

  function cancelFile(key, onCancelProp = null) {
    const index = getFileByIndex(key, files);
    if (index !== null) {
      if (files[index].status === types.status.PROCESSING || files[index].status === types.status.WAITINGFORSERVER) {
        const file = files[index];

        // will stop the uploading
        file.request.abort();

        setFiles(
          setFile(file, fileItem => {
            const file = fileItem;
            file.status = types.status.CANCEL;
            file.processed = true;
            return fileItem;
          })
        );

        if (typeof onCancelProp === "function") {
          onCancelProp(file);
        }
      }
    }
  }

  function removeFile(key) {
    const index = getFileByIndex(key, files);

    if (index !== null) {
      /*
        Removing a file while is been uploaded mess with areAllFilesProccessed() function,
        as well give a wrong impression the request has been cancel to the server.
        Therefore is only possible to remove files once they were processed or on idle status.
      */
      if (isCompleted || files[index].status === types.status.IDLE || files[index].status === types.status.ERROR) {
        const fileClones = files.slice(0);
        fileClones.splice(index, 1);

        const uploadingFileListClone = uploadingFileList.slice(0);
        uploadingFileListClone.splice(index, 1);

        setFiles(() => fileClones);
        setUploadingFileList(() => uploadingFileListClone);
      }
    }
  }

  const upload = React.useCallback(() => {
    const isSameList = (files, uploadingFileList) => {
      const sameList =
        files.length === uploadingFileList.length &&
        files.every((file, index) => file.key === uploadingFileList[index].key);

      return sameList;
    };

    function areAllFilesProccessed() {
      if (files.every(file => file.processed)) {
        setIsBusy(() => false);
        setisCompleted(() => true);
        onCompleted(files);
      }
    }

    function onSuccess({ file, response }) {
      setFiles(
        setFile(file, fileItem => {
          const file = fileItem;
          file.isValid = true;
          file.processed = true;
          file.response = response;
          file.status = types.status.SUCCESS;
          return fileItem;
        })
      );

      areAllFilesProccessed();
    }

    function onError({ file, error }) {
      setFiles(
        setFile(file, fileItem => {
          const file = fileItem;
          file.status = types.status.ERROR;
          file.error = error;
          file.processed = true;
          file.isValid = false;
          file.isServerValid = false;
          return fileItem;
        })
      );

      areAllFilesProccessed();
    }

    function onProgress({ file, percent }) {
      setFiles(
        setFile(file, fileItem => {
          const file = fileItem;
          file.progress = percent;
          file.status = types.status.PROCESSING;

          if (percent === 100) {
            file.status = types.status.WAITINGFORSERVER;
          }
          return fileItem;
        })
      );
    }

    if (files.length && !isSameList(files, uploadingFileList) && !isBusy) {
      if (files.every(file => !file.isValid || file.status === types.status.SUCCESS)) {
        return;
      }

      setUploadingFileList(() => JSON.parse(JSON.stringify(files)));
      setIsBusy(() => true);
      setisCompleted(() => null);
      onProcessed(files);

      files.forEach(file => {
        if (file.isValid && file.status !== types.status.SUCCESS) {
          uploadToServer({ file, endpoint, onProgress, onSuccess, onError, headers, onRequest });
        }
      });
    }
  }, [files, uploadingFileList, isBusy, onCompleted, endpoint, headers, onRequest, onProcessed]);

  React.useEffect(() => {
    if (hasAutoUpload) {
      upload();
    }
  }, [files, hasAutoUpload, upload]);

  return { files, setFiles, isBusy, isCompleted, upload, removeFile, cancelFile };
}
