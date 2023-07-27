function calculateHoursPerDay(input) {
  let bookPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let daysToRead = Number(input[2]);
  let result = bookPages / daysToRead / pagesPerHour;
  console.log(result);
}
