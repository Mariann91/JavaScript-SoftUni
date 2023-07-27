function calculateDeposit(input) {
  let depositedMoney = Number(input[0]);
  let depositDueDate = Number(input[1]);
  let annualInterestRate = Number(input[2]) / 100;
  let result = depositedMoney + depositDueDate * ((depositedMoney * annualInterestRate) / 12)
  console.log(result)
}
