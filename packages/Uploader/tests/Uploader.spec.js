import React from "react";
import { act } from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Uploader from "../src";

function renderComponent() {
  return render(
    <Uploader endpoint="https://api.youtube.com">
      <Uploader.DropZone />
      <Uploader.FileList maxFileSize={100} supportedMimeTypes={["audio/wav"]} />
    </Uploader>
  );
}

describe("Uploader", () => {
  it("Should render the component", () => {
    renderComponent();

    expect(screen.getByText("Drop files to upload here or")).toBeInTheDocument();
    expect(screen.getByText("choose from your computer")).toBeInTheDocument();
    expect(screen.getByTestId("uploader-dropZone-uploadIcon")).toBeInTheDocument();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should render name on input", () => {
    render(
      <Uploader endpoint="https://api.youtube.com">
        <Uploader.DropZone />
        <Uploader.Input name="file-input" />
      </Uploader>
    );
    expect(screen.getByTestId("uploader.input")).toHaveAttribute("name", "file-input");
  });

  it("should call event handlers", () => {
    const handleChange = jest.fn();
    const handleProcess = jest.fn();
    const handleRequest = jest.fn();
    const file = new File([new ArrayBuffer(1)], "file.jpg");

    render(
      <Uploader endpoint="" onChange={handleChange} onProcess={handleProcess} onRequest={handleRequest}>
        <Uploader.DropZone />
      </Uploader>
    );

    act(() => {
      fireEvent.change(screen.getByTestId("uploader.input"), { target: { files: [file] } });
    });

    expect(handleChange).toBeCalledTimes(1);
    expect(handleProcess).toBeCalledTimes(1);
    expect(handleRequest).toBeCalledTimes(1);
  });
});
