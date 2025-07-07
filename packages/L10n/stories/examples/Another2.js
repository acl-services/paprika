import i18n from "../../src/i18n-new";

export default function ConsumingApp() {
  const NAMESPACE = "translation";

  i18n.addResourceBundle("en", NAMESPACE, {
    key1: "this is the first one",
    errors: {
      page1: {
        creating: "Unable to create",
        saving: "Unable to save",
        deleting: "Unable to delete",
      },
      page2: {
        creating: "You don't have permission to create",
        saving: "You don't have permission to save",
        deleting: "You don't have permission to delete",
      },
    },
    key2: "here is another",
    key3: "who let the dogs out?",
  });

  return i18n.t("errors.page2.saving");
}
