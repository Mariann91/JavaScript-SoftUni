function merge(input) {
  let firstName = input[0];
  let lastName = input[1];
  let age = Number(input[2]);
  let town = input[3];
  let mergedText = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
  console.log(mergedText);
}
