//console.log(today);

function formatDate() {
  let now = new Date();
  console.log(now);
  console.log(now.getMilliseconds());
  console.log(now.getDay());
  console.log(now.getDate());
  console.log(now.getFullYear());
  console.log(now.getMonth());

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[now.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();

  let today = `Today is ${day}, ${month} ${date}, ${year}.`;

  return today;
}
console.log(formatDate());
