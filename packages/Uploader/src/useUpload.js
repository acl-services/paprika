import React from "react";

export default function useUpload({ hasAutoupload, upload, onChange, files, url, refInput }) {
  React.useEffect(() => {
    console.log("useUpload--------->");
    function onProgress({ file, percentage }) {
      console.log(file.key, percentage);
    }

    function uploadFiles({ files, url, refInput }) {
      if (hasAutoupload && files.length) {
        files.forEach(file => {
          upload({ file, url, refInput, onProgress });
        });
      }
    }

    onChange(files);
    uploadFiles({ files, url, refInput, onProgress });
  }, [files, hasAutoupload, onChange, refInput, upload, url]);
}
