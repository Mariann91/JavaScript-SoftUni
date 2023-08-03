function tradeCommissions(input) {
 let city = input[0];
 let sales = Number(input[1]);
 
 let commission = 0;
 let isValid = true;
 
 switch (city) {
   case "Sofia":
     if (sales < 0) {
       isValid = false;
     } if (sales <= 500) {
       commission = sales * 0.05;
     } else if (sales <= 1000){
       commission = sales * 0.07;
     } else if (sales <= 10000){
       commission = sales * 0.08;
     } else {
       commission = sales * 0.12;
      } 
     break;
    
    case "Varna":
      if (sales < 0) {
       isValid = false;
      } if (sales <= 500) {
        commission = sales * 0.045;
      } else if (sales <= 1000){
        commission = sales * 0.075;
      } else if (sales <= 10000){
        commission = sales * 0.10;
      } else if (sales > 10000) {
        commission = sales * 0.13;
      } else {
        isValid = false;
      }
     break;
     
     case "Plovdiv":
       
       if (sales < 0) {
         isValid = false;
       } else if (sales <= 500) {
        commission = sales * 0.055;
       } else if (sales <= 1000){
        commission = sales * 0.08;
       } else if (sales <= 10000){
        commission = sales * 0.12;
       } else if (sales > 10000) {
       commission = sales * 0.145;
        } else {
          isValid = false;
     }
     break;
     
     default:
      isValid = false;
      break;
 }
 
 if (isValid) {
   console.log(commission.toFixed(2));
 } else {
   console.log("error");
 }
  
}
