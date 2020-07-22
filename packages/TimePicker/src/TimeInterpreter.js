import moment from "moment";

const ERROR_INVALID_FORMAT = "invalid time pattern";

function getValidFormatMomentValue(time) {
  // Using unit test determined these formats properly interpret every value
  // passed to moment
  const possibleFormats = ["Hmm", "HHmm"];
  const momentValue = moment(time, possibleFormats);

  // Add extra am/pm logic to help handle period cases
  if (momentValue.isValid() && momentValue.hours() < 12) {
    const lowerCaseTime = time.toLowerCase();
    if (lowerCaseTime.endsWith("pm") || lowerCaseTime.endsWith("p")) {
      momentValue.add(12, "hours");
    }
  }

  return momentValue;
}

function momentValueToTimeObj(momentValue) {
  const getHours = hours => {
    let hh = hours % 12;
    hh = hh === 0 ? 12 : hh;
    return hh;
  };

  if (momentValue.isValid()) {
    return {
      error: "",
      timeStr: momentValue.format("hh:mma"),
      timeStrWithSpace: momentValue.format("hh:mm a"),
      hh: getHours(momentValue.hours()),
      mm: momentValue.minutes(),
      period: momentValue.format("a"),
    };
  }
  return {
    error: ERROR_INVALID_FORMAT,
    timeStr: null,
    timeStrWithSpace: null,
    hh: null,
    mm: null,
    period: null,
  };
}

function parse(time) {
  const momentValue = getValidFormatMomentValue(time);

  const timeObj = momentValueToTimeObj(momentValue);
  timeObj.value = time;
  timeObj.isVisible = true;

  return timeObj;
}

export default { parse };
