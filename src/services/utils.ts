function formatDateTime(date: Date) {
  let formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(date);
}

export { formatDateTime };
