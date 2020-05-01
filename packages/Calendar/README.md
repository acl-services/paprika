# Calendar

This package consists of two components (`SingleDateCalendar` and `DateRangeCalendar`) providing calendar views but with difference that `SingleDateCalendar` allows selecting only one exact date and `DateRangeCalendar` allows selection range of dates.

## Installation

```shell
npm install --save @paprika/calendar
```
or
```shell
yarn add @paprika/calendar
```

## Usage

Please use `<L10n />` component to wrap calendar components or you application.

### SingleDateCalendar

```js
import SingleDateCalendar from "@paprika/calendar/lib/SingleDateCalendar";
// alternative (but has potential problems with tree-shaking):
// import { SingleDateCalendar } from "@paprika/calendar";

const [date, setDate] = React.useState(null);
const [possibleDate, setPossibleDate] = React.useState(null);

<SingleDateCalendar
  date={date}
  onSelect={setDate}
  possibleDate={possibleDate}
  resetPossibleDate={() => { setPossibleDate(null) }}
/>
```

### DateRangeCalendar

```js
import DateRangeCalendar from "@paprika/calendar/lib/DateRangeCalendar";
// alternative (but has potential problems with tree-shaking):
// import { DateRangeCalendar } from "@paprika/calendar";

const [[startDate, endDate], setDates] = React.useState([null, null]);
const [possibleDate, setPossibleDate] = React.useState(null);

<DateRangeCalendar
  startDate={startDate}
  endDate={endDate}
  onDatesChange={setDates}
  possibleDate={possibleDate}
  resetPossibleDate={() => { setPossibleDate(null) }}
/>
```

## Props

### SingleDateCalendar

- `date` (required)
- `onSelect` (required)
- `possibleDate`
- `resetPossibleDate`

### DateRangeCalendar

- `startDate` (required)
- `onStartDateSelect` (required)
- `endDate` (required)
- `onEndDateSelect` (required)
- `possibleDate`
- `resetPossibleDate`
