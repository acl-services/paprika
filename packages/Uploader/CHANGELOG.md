# Changelog

## 2.0.8

### Patch Changes

- Updated dependencies [c265721]
- Updated dependencies [26a610a]
  - @paprika/popover@1.2.0

## 2.0.8-next.0

### Patch Changes

- Updated dependencies [c265721]
  - @paprika/popover@1.2.0-next.0

## 2.0.7

### Patch Changes

- Updated dependencies [12938b6]
  - @paprika/popover@1.1.0

## 2.0.7-next.0

### Patch Changes

- Updated dependencies [12938b6]
  - @paprika/popover@1.1.0-next.0

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## [0.2.11] - 2020-05-28

### Added

- Added a UI to the Uploader and added support for restarting failed/cancelled uploads. [@jamiek-acl](https://github.com/jamiek-acl).

## [0.3.13] - 2020-09-02

### Added

- Updated: Created and placed all constants into type.js file. [@kaan.darcey](https://github.com/KDarcey).

## [1.1.1-alpha.0] - 2020-12-16

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

## [2.0.3-alpha.0] - 2021-01-21

### Fixed

- Fixed the potential mapping children error.

## [2.0.4-alpha.0] - 2021-02-01

### Changed

- Replace `nanoid` by `uuid`.
