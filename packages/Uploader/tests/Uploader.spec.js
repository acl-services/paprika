import React from "react";
import { render } from "@testing-library/react";
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
    const { getByText, getByTestId } = renderComponent();

    expect(getByText("Drop files to upload here or")).toBeInTheDocument();
    expect(getByText("choose from your computer")).toBeInTheDocument();
    expect(getByTestId("uploader-dropZone-uploadIcon")).toBeInTheDocument();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });
});
