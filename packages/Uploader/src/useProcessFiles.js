import React from "react";
import types from "./types";
import { upload as uploadToServer } from "./helpers";

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

export default function useProcessFiles({ hasAutoupload, onChange, onFinished, endpoint, defaultIsDisable, headers }) {
  const [uploadingFileList, setUploadingFileList] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(defaultIsDisable);
  const [hasFinished, sethasFinished] = React.useState(null);
  const [files, setFiles] = React.useState([]);

  function cancelFile(key) {
    const index = getFileByIndex(key, files);
    if (index !== null) {
      if (files[index].status === types.PROCESSING || files[index].status === types.WAITINGFORSERVER) {
        const file = files[index];

        // will stop the uploading
        file.request.abort();

        setFiles(
          setFile(file, fileItem => {
            const file = fileItem;
            file.status = types.CANCEL;
            file.processed = true;
            return fileItem;
          })
        );
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
      if (hasFinished || files[index].status === types.IDLE || files[index].status === types.ERROR) {
        const fileClones = files.slice(0);
        fileClones.splice(index, 1);

        const uploadingFileListClone = uploadingFileList.slice(0);
        uploadingFileListClone.splice(index, 1);

        setFiles(() => fileClones);
        setUploadingFileList(() => uploadingFileListClone);
      }
    }
  }

  const upload = React.useCallback(
    function uploadItem() {
      const isSameList = (files, uploadingFileList) => {
        const sameList =
          files.length === uploadingFileList.length &&
          files.every((file, index) => file.key === uploadingFileList[index].key);

        return sameList;
      };

      function areAllFilesProccessed() {
        if (files.every(file => file.processed)) {
          setIsDisabled(() => false);
          sethasFinished(() => true);
          onFinished(files);
        }
      }

      function onSuccess({ file, response }) {
        setFiles(
          setFile(file, fileItem => {
            const file = fileItem;
            file.isValid = true;
            file.processed = true;
            file.response = response;
            file.status = types.SUCCESS;
            return fileItem;
          })
        );

        areAllFilesProccessed();
      }

      function onError({ file, error }) {
        setFiles(
          setFile(file, fileItem => {
            const file = fileItem;
            file.status = types.ERROR;
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
            file.status = types.PROCESSING;

            if (percent === 100) {
              file.status = types.WAITINGFORSERVER;
            }
            return fileItem;
          })
        );
      }

      if (files.length && !isSameList(files, uploadingFileList) && !isDisabled) {
        setUploadingFileList(() => files);
        setIsDisabled(() => true);
        sethasFinished(() => null);
        onChange(files);
        files.forEach(file => {
          if (file.isValid && file.status !== types.SUCCESS) {
            uploadToServer({ file, endpoint, onProgress, onSuccess, onError, headers });
          }
        });
      }
    },
    [files, uploadingFileList, isDisabled, onFinished, onChange, endpoint, headers]
  );

  React.useEffect(() => {
    if (hasAutoupload) {
      upload();
    }
  }, [files, hasAutoupload, upload]);

  return { files, setFiles, isDisabled, hasFinished, upload, removeFile, cancelFile };
}
