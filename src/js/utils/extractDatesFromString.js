export function extractDatesFromString(inputString) {
  const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
  const dates = inputString.match(datePattern);
  return dates || [];
}