import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "@paprika/card";
import useI18n from "@paprika/l10n/lib/useI18n";
import Heading from "@paprika/heading";
import Avatar from "@paprika/avatar";
import { data1, data2, data3 } from "./mock";
import Pagination from "../../src/Pagination";

const data = [data1, data2, data3];

export default () => {
  const [selectedPage, setSelectedPage] = React.useState(1);
  const I18n = useI18n();
  const pageNum = I18n.t(`pagination.page`) + selectedPage;

  function handleClickChangePage(prop) {
    setSelectedPage(prop);
  }

  return (
    <Story>
      <Heading level={1}>{pageNum} </Heading>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data[selectedPage - 1].map(props => {
          const bgColor = props.color;
          return (
            <div style={{ margin: "8px" }}>
              <Card size={Card.types.size.MEDIUM}>
                <Card.Header>
                  <Avatar backgroundColor={bgColor} color="white">
                    {props.avatar}
                  </Avatar>
                </Card.Header>
                <Card.Content>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Metadata>{props.meta1}</Card.Metadata>

                  <Card.Text>{props.text}</Card.Text>
                  <Card.Metadata>{props.meta2}</Card.Metadata>
                  <Card.Metadata>{props.meta3}</Card.Metadata>
                </Card.Content>
                <Card.Footer>
                  <div>
                    <span>{props.footer1}</span>
                    <span> {props.footer2}</span>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
      <Pagination
        onChange={handleClickChangePage}
        style={{ marginTop: "100px" }}
        totalPages={3}
        currentPage={selectedPage}
      />
    </Story>
  );
};
