function nextDay(year, month, day) {
  let newDay = day + 1;
  
  let date = new Date(`${year}-${month}-${newDay}`);
  
  let outputYear = date.getFullYear();
  let outputMonth = date.getMonth() + 1;
  let outputDate = date.getDate();
  
  let output = `${outputYear}-${outputMonth}-${outputDate}`;
  
  console.log(output);
  
}
