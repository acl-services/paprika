import React from "react";
import FormElement from "../../FormElement";
import Content from "../Content";
import Description from "../Description";
import Error from "../Error";
import Instructions from "../Instructions";
import Label from "../Label";
import Layout from "../Layout";

function Fieldset(props) {
  return (
    <FormElement {...props} hasFieldSet>
      {props.children}
    </FormElement>
  );
}

Fieldset.types = FormElement.types;
Fieldset.displayName = "Fieldset";
Fieldset.propTypes = FormElement.propTypes;
Fieldset.defaultProps = FormElement.defaultProps;

Fieldset.Content = Content;
Fieldset.Label = Label;
Fieldset.Description = Description;
Fieldset.Instructions = Instructions;
Fieldset.Error = Error;
Fieldset.Layout = Layout;

export default Fieldset;
