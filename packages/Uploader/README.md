# UPLOADER

An agnostic UI component that let you upload files and customize the interface. has a peer dependency on [superagent](https://github.com/visionmedia/superagent)

## Installation

`> npm install --save @paprika/uploader superagent`

or

`> yarn add @paprika/uploader superagent`

## Usage

The `<Uploader />` component uses a render prop pattern expecting a function to pass children.

```js
<Uploader>
  {({ ...props }) => {
    return <YourUI />;
  }}
</Uploader>
```

### The children function

_The children_ function will received the state and helpers that you can use to build your own UI. The following are the properties pass down to the children function.

- **FileInput**
  The input[type="file"] element ready to be consumed
- **files**
  A enhance list of the user selected files
- **hasFinished**
  Is true when all files have been processed
- **isDisabled**
  Describe the status of the component
- **isDragLeave**
  Will be true if a dragOver event occurred and leave the droppable area
- **isDraggingOver**
  Is `True` when detecting the user is dragging files over the droppable area
- **removeFile**
  `removeFile(key)` will remove a file from the files list, this function doesn't work while the file is on _PROCESSING_ state.
- **cancelFile**
  `cancelFile(key)` stop the request cycle keep in mind that if it's on _WAITINGFORSERVER_ state the server might save the file even if - the request has been cancel
- **upload**
  `upload()` give you the option to manually upload the files if you are decide to not use _hasAutoUpload_

Example:

```js
<Uploader>
  {({ FileInput, files, isDisabled, isDraggingOver, isDragLeave, hasFinished, upload, removeFile, cancelFile }) => {
    return (
      <FileInput>
        <YourStylishUI />
      </FileInput>
    );
  }}
</Uploader>
```

### FileInput Component

The `<FileInput>{children}</FileInput>` is a ready to use component which is passed down by the `<Uploader />` component.
This component has attached accessibility and attributes required to make it work correctly, you can pass any children to beautify their aspect, keep in mind that is already an input[type='file'] so avoid putting a <Button /> component or a <button /> element as a children, just make it look like one.

### Endpoint

The _Uploader_ provides a `endpoint` prop which you can use to point the url of the service you want to reach, Ex.
`<Uploader endpoint="https://yoururl.com/api/upload" ...`

## Props

| Prop              | Type            | Description                                                                      |
| ----------------- | --------------- | -------------------------------------------------------------------------------- |
| a11yText          | string          | Accessible message for the input[type="file"].                                   |
| okFileTypes       | arrayOf(string) | An array of string describing the allowed file types for the uploader.           |
| canChooseMultiple | bool            | When false the uploader only accept one file per upload.                         |
| children          | function        | children function                                                                |
| defaultIsDisabled | bool            | initial disable state for the uploader                                           |
| endpoint          | string          | The url that will be use to upload the files ex. https://yoursite.com/api/upload |
| hasAutoUpload     | bool            | On true will upload the file as soon they are selected or dropped                |
| isBodyDroppable   | bool            | When true the user will be able to drop files at any part of the document.body   |
| maxFileSize       | number          | Size in Mebibytes                                                                |
| onChange          | func            | This callback fires every time a file has been processed                         |
| onCompleted       | func            | Will be fire once all files has been processed with the files as parameter       |
| headers           | arrayOf(object) | you can pass an array of header objects as need                                  |

[More detail about these props](https://github.com/acl-services/paprika/blob/master/packages/Uploader/src/Uploader.js)

### Accessibility

The Uploader automatically handle the on focus circle when using the `<FileInput />` component on it.

- it should notify when start uploading the files and when finishing processing the files.
