function concatenateData(data){
  let firstName = data[0];
  let lastName = data[1];
  let age= data[2];
  let town = data[3];
  
  let result = `You are ${firstName}, ${lastName}, a ${age}-years old person from ${town}.`
  
  console.log(result); 
}
