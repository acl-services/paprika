import React from "react";
import { render } from "@testing-library/react";
import Uploader from "../src";

function renderComponent() {
  return render(
    <Uploader>
      <Uploader.DropZone />
      <Uploader.FileList />
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
});
