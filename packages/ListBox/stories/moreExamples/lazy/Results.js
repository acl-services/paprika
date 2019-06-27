import React from "react";

export default function Results(props) {
  return (
    <div
      style={{
        "grid-gap": "32px",
        "grid-template-columns": "16vw 16vw 16vw",
        display: "grid",
        marginBottom: "32px",
      }}
    >
      {props.ids.map(id => (
        <div
          key={id}
          style={{
            border: "1px solid #CCC",
            borderRadius: "3px",
            height: "210px",
            marginRight: "4px",
            padding: "4px",
            width: "100%",
          }}
        >
          <div
            style={{
              background: `url(${props.charactersCache[id].thumbnail.path}.${props.charactersCache[id].thumbnail.extension})`,
              backgroundSize: "cover",
              height: "100%",
              overflow: "hidden",
              width: "100%",
            }}
          />
          <span
            style={{
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              display: "inline-block",
              fontSize: "14px",
              padding: "4px",
              position: "relative",
              top: "-40px",
              width: "calc(100% - 8px)",
            }}
          >
            {props.charactersCache[id].name}
          </span>
        </div>
      ))}
    </div>
  );
}
