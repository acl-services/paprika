# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Add

- OnError prop, now give the ability to the consumer to manipulate the error message per file in case of need it.

### Remove

- The ability to retry and upload a file has been remove, was not stable and need more time to make it work properly

### Changed

- `breaking change` Now whenever you use the **onRequest** prop, you should switch from `onError` function to `onEnd` function which is what really is happening

```js
        <Uploader
          {...}
          onRequest={({ file, onProgress, onEnd, formData }) => {
            file.request
              .get("https://api.example.com:4001/")
              .withCredentials()
              .on("progress", onProgress)
              .end(onEnd);
          }}
        >

```

## [0.2.11] - 2020-05-28

### Added

- Added a UI to the Uploader and added support for restarting failed/cancelled uploads. [@jamiek-acl](https://github.com/jamiek-acl).

## [0.3.13] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).
