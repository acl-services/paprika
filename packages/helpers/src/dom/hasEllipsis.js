// https://stackoverflow.com/questions/7738117/html-text-overflow-ellipsis-detection

export default function hasEllipsis(e) {
  return e.offsetWidth < e.scrollWidth;
}
