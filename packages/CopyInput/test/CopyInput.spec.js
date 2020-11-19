import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CopyInput from "../src";

describe("CopyInput", () => {
  it("should have the correct tooltips, and copy value to clipboard when clicking on button", async () => {
    document.execCommand = jest.fn();

    const props = { defaultValue: "this will be copied" };
    const { getByTestId, getByText } = render(<CopyInput {...props} />);

    fireEvent.mouseOver(getByTestId("button"));
    await waitFor(() => expect(getByText("Copy to clipboard")).toBeVisible());

    fireEvent.click(getByTestId("button"));
    expect(document.execCommand).toHaveBeenCalledWith("copy");
    await waitFor(() => expect(getByText("Copied")).toBeVisible());

    setTimeout(() => expect(getByText("Copied")).not.toBeVisible(), 5000);
  });
});
