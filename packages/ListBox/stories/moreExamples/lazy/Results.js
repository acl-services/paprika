import React from "react";

export default function Results(props) {
  return (
    <div css="margin-bottom: 32px; display: grid; grid-template-columns: 16vw 16vw 16vw; grid-gap: 32px;">
      {props.ids.map(id => (
        <div
          key={id}
          css="width: 100%; height: 210px; border-radius: 3px; border: 1px solid #CCC; padding: 4px; margin-right: 4px;"
        >
          <div
            css={`
              width: 100%;
              height: 100%;
              overflow: hidden;
              background: url(${props.charactersCache[id].thumbnail.path}.${props.charactersCache[id].thumbnail.extension});
              background-size: cover;
            `}
          />
          <span
            css="
              display: inline-block;
              color: #fff;
              width:calc(100% - 8px);
              padding: 4px;
              font-size: 14px;
              position: relative;
              top: -40px;
              background: rgba(0, 0, 0, 0.8);
            "
          >
            {props.charactersCache[id].name}
          </span>
        </div>
      ))}
    </div>
  );
}
