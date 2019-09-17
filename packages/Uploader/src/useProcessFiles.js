import React from "react";
import types from "./types";
import { upload } from "./helpers";

export default function useProcessFiles({ hasAutoupload, onChange, url, defaultIsDisable }) {
  const [uploadingFileList, setUploadingFileList] = React.useState([]);
  const [isDisabled, setIsDisabled] = React.useState(defaultIsDisable);
  const [hasSucceeded, setHasSucceeded] = React.useState(null);
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
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

    function isSameList() {
      const sameList =
        files.length === uploadingFileList.length &&
        files.every((file, index) => file.key === uploadingFileList[index].key);

      return sameList;
    }

    function areAllFilesProccessed() {
      if (files.every(file => file.processed)) {
        setIsDisabled(() => false);
        setHasSucceeded(() => true);
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

    function processFiles(files) {
      files.forEach(file => {
        if (file.isValid) {
          upload({ file, url, onProgress, onSuccess, onError });
        }
      });
    }

    if (hasAutoupload && files.length && !isSameList() && !isDisabled) {
      setUploadingFileList(() => files);
      setIsDisabled(() => true);
      setHasSucceeded(() => null);
      onChange(files);
      processFiles(files);
    }
  }, [files, hasAutoupload, isDisabled, onChange, uploadingFileList, url]);

  return { files, setFiles, isDisabled, hasSucceeded };
}
