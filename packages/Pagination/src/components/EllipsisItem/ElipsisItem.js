import React from "react";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./ElipsisItem.styles";

function ElipsisItem() {
  const I18n = useI18n();
  return (
    <sc.Wrapper>
      <sc.ElipsisItem aria-disabled aria-label={I18n.t("pagination.elipsis")} role="button">
        <sc.ElipsisItemElipse>...</sc.ElipsisItemElipse>
      </sc.ElipsisItem>
    </sc.Wrapper>
  );
}

ElipsisItem.displayName = "Pagination.ElipsisItem";

export default ElipsisItem;
