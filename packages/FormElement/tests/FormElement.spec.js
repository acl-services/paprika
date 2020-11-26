/* eslint-disable react/prop-types */
import React from "react";
import { render, configure } from "@testing-library/react";
import L10n from "@paprika/l10n";
import Input from "@paprika/input";
import Fieldset from "../src/components/Fieldset";
import FormElement from "../src";

configure({ testIdAttribute: "data-pka-anchor" });

const defaultLabel = "Form Element";

const { Label, Content, Instructions, Description, Error } = FormElement;

function FormElementComponent(props) {
  const { children, label, isDisabled, isReadOnly, hasOptionalLabel, hasRequiredLabel, ...moreProps } = props;
  return (
    <FormElement {...moreProps}>
      <Label hasRequiredLabel={hasRequiredLabel} hasOptionalLabel={hasOptionalLabel}>
        {label || defaultLabel}
      </Label>
      {children || (
        <Content>
          {a11yProps => (
            <Input
              isReadOnly={isReadOnly}
              isDisabled={isDisabled}
              data-pka-anchor="form-element.input"
              {...a11yProps}
            />
          )}
        </Content>
      )}
    </FormElement>
  );
}

function renderComponent(props = {}) {
  return render(
    <L10n>
      <FormElementComponent {...props} />
    </L10n>
  );
}

describe("FormElement", () => {
  const { getByTestId, queryByTestId } = renderComponent();
  it("renders default props", () => {
    expect(getByTestId("form-element.label")).toHaveTextContent(defaultLabel);
    expect(getByTestId("form-element.input")).toBeInTheDocument();
    expect(getByTestId("form-element.input")).not.toHaveAttribute("disabled");
    expect(getByTestId("form-element.input")).not.toHaveAttribute("readonly");
    expect(queryByTestId("form-element.description")).not.toBeInTheDocument();
    expect(queryByTestId("form-element.error")).not.toBeInTheDocument();
    expect(queryByTestId("form-element.help")).not.toBeInTheDocument();
    expect(queryByTestId("form-element.instructions")).not.toBeInTheDocument();
  });

  it("renders id", () => {
    const { getByTestId } = renderComponent({ id: "test-id" });

    expect(getByTestId("form-element.input").id).toEqual("test-id");
    expect(getByTestId("form-element.label")).toHaveAttribute("for", "test-id");
  });

  it("renders required label if both hasRequiredLabel and hasOptionalLabel are true", () => {
    const { getByTestId } = renderComponent({ hasOptionalLabel: true, hasRequiredLabel: true });

    expect(getByTestId("form-element.label")).not.toHaveTextContent(/optional/i);
    expect(getByTestId("form-element.label")).toHaveTextContent(/required/i);
  });

  it("renders required label if only hasRequiredLabel is true", () => {
    const { getByTestId } = renderComponent({ hasRequiredLabel: true });

    expect(getByTestId("form-element.label")).not.toHaveTextContent(/optional/i);
    expect(getByTestId("form-element.label")).toHaveTextContent(/required/i);
  });

  it("renders optional label if hasOptionalLabel is true", () => {
    const { getByTestId } = renderComponent({ hasOptionalLabel: true });

    expect(getByTestId("form-element.label")).toHaveTextContent(/optional/i);
    expect(getByTestId("form-element.label")).not.toHaveTextContent(/required/i);
  });

  it("passes disabled readonly props to child", () => {
    const { getByTestId } = renderComponent({ isDisabled: true, isReadOnly: true });

    expect(getByTestId("form-element.input")).toHaveAttribute("disabled");
    expect(getByTestId("form-element.input")).toHaveAttribute("readonly");
  });

  it("renders help and description", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement>
          <Label help="Sample help">A label</Label>
          <Content>
            <input data-pka-anchor="form-element.input" />
          </Content>
          <Description>Sample description</Description>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("form-element.description")).toHaveTextContent(/sample description/i);
    expect(getByTestId("form-element.help")).toBeInTheDocument();
  });

  it("renders extra panel", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement>
          <Label help="Sample help">{defaultLabel}</Label>
          <Content>
            <input data-pka-anchor="form-element.input" />
          </Content>
          <Instructions>Instructions Panel Content Instructions Panel Content Instructions Panel Content</Instructions>
          <Description>Sample description</Description>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("form-element.instructions")).toHaveTextContent(
      /Instructions Panel Content Instructions Panel Content Instructions Panel Content/i
    );
  });

  it("renders error", () => {
    const { getByTestId } = render(
      <L10n>
        <FormElement>
          <Label>{defaultLabel}</Label>
          <Content>
            <input data-pka-anchor="form-element.input" />
          </Content>
          <Description>Sample description</Description>
          <Error>Sample error</Error>
        </FormElement>
      </L10n>
    );

    expect(getByTestId("form-element.error")).toHaveTextContent(/sample error/i);
  });

  it("renders fieldset, legend and not label element", () => {
    const { container } = render(
      <L10n>
        <Fieldset>
          <Label>{defaultLabel}</Label>
          <Content>
            <input data-pka-anchor="form-element.input" />
          </Content>
          <Description>Sample description</Description>
          <Error>Sample error</Error>
        </Fieldset>
      </L10n>
    );
    expect(container.querySelector("fieldset")).toBeInTheDocument();
    expect(container.querySelector("legend")).toBeInTheDocument();
    expect(container.querySelector("label")).not.toBeInTheDocument();
  });

  it("renders fieldset and label element", () => {
    const { container } = render(
      <L10n>
        <FormElement>
          <Label>{defaultLabel}</Label>
          <Content>
            <input data-pka-anchor="form-element.input" />
          </Content>
          <Description>Sample description</Description>
          <Error>Sample error</Error>
        </FormElement>
      </L10n>
    );

    expect(container.querySelector("fieldset")).not.toBeInTheDocument();
    expect(container.querySelector("legend")).not.toBeInTheDocument();
    expect(container.querySelector("label")).toBeInTheDocument();
  });
});
