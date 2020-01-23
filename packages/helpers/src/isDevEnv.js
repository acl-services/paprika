export default function isDevEnv() {
  return !process.env.NODE_ENV || process.env.NODE_ENV === "development";
}
