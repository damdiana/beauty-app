import "./MonthAndDayDate.css";

const MonthAndDayDate = ({
  date,
  size,
}: {
  date: Date;
  size: "small" | "medium" | "large";
}) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedTime = `${date.getHours()}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  const formattedDate = `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  return (
    <div className={`flex justify-center pt-4 ${size}`}>
      <p className="mr-1 calendar"> 🗓️ </p>
      <time
        className="mt-1 flex flex-col"
        dateTime={`${formattedDate}T${formattedTime}`}
      >
        <span className="date"> {date.getDate()} </span>
        <span>{monthNames[date.getMonth()]} </span>
      </time>
    </div>
  );
};

export default MonthAndDayDate;
