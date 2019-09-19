import React from "react";
import types from "./types";
import { upload as uploadToServer } from "./helpers";

export default function useProcessFiles({ hasAutoupload, onChange, onFinished, endpoint, defaultIsDisable }) {
  const [uploadingFileList, setUploadingFileList] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(defaultIsDisable);
  const [hasFinished, sethasFinished] = React.useState(null);
  const [files, setFiles] = React.useState([]);

  function removeItem(key) {
    let index = null;

    files.some((file, i) => {
      if (file.key === key) {
        index = i;
        return true;
      }
      return false;
    });

    if (index !== null) {
      /*
        Removing a file while is been uploaded mess with areAllFilesProccessed() function,
        as well give a wrong impression the request has been cancel to the server.
        Therefore is only possible to remove files once they were processed or on idle status.
      */
      if (hasFinished || files[index].status === types.IDLE) {
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
            file.status = types.WAITING4SERVER;
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
          uploadToServer({ file, endpoint, onProgress, onSuccess, onError });
        }
      });
    }
  }, [files, uploadingFileList, isDisabled, onFinished, onChange, endpoint]);

  upload.displayName = "upload"; // helps dev tools displaying upload() instead of anonymous function

  React.useEffect(() => {
    if (hasAutoupload) {
      upload();
    }
  }, [files, hasAutoupload, upload]);

  return { files, setFiles, isDisabled, hasFinished, upload, removeItem };
}
