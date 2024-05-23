export function formatDate(input) {
  let date;

  if (typeof input === "string") {
    date = new Date(input);
  } else if (Object.prototype.toString.call(input) === "[object Date]") {
    date = input;
  } else {
    return "Invalid Date";
  }

  const day = String(date.getDate()).padStart(2, "0"); // Get day and pad it with a leading zero if necessary
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-based index, so add 1) and pad it
  const year = date.getFullYear(); // Get the full year

  return `${day}/${month}/${year}`;
}
