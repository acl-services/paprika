import React from "react";
import ProgressBar from "../../src";

const DELAY = 100;
const DECAY = 0.9;
const BASE_INCREMENT = 0.35;
const BASE_THRESHOLD = 10;

export default function Loading() {
  const [value, setValue] = React.useState(0);
  const [a11yText, setA11yText] = React.useState("loading");

  const increment = React.useRef(BASE_INCREMENT);
  const threshold = React.useRef(BASE_THRESHOLD);
  const thresholdIncrement = React.useRef(BASE_THRESHOLD);

  React.useEffect(() => {
    if (value >= threshold.current) {
      thresholdIncrement.current *= DECAY;
      increment.current *= DECAY;
      threshold.current += thresholdIncrement.current;
    }

    if (value <= 100) {
      setTimeout(() => {
        setValue(value => value + increment.current);
      }, DELAY);
    } else {
      setValue(100);
      setA11yText("loading complete");
    }
  }, [value]);

  return (
    <>
      <ProgressBar completed={value} a11yText={a11yText} isCompact />
    </>
  );
}
