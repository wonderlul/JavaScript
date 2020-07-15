//Task 3
//Based on included JSON file:
//Create a function that will return Json from the file.
//Create a structures to hold data from the file.
//Map data from function a to structure from b.

//Create object that will give us data about:
//How much money was spend in 2014
//What company was earning how much
//What type on transaction was having what spending’s.
//Values of the spending in each month
//Values of the spending in each day of the week

let dataObject = require("./Data.json");

//Balance of 2014

let balanceOf2014 = dataObject
  .filter(
    (transaction) => transaction.detailsOfPayent.date.split("-")[2] === "2014"
  )
  .reduce(
    (previousValue, currentTransaction) =>
      +previousValue + +currentTransaction.cost,
    0
  )
  .toFixed(2);

//Which company spent how much

const companies = [
  ...new Set(
    dataObject.map((transaction) => transaction.detailsOfPayent.company)
  ),
].sort();

function companiesExpenses(name, cost) {
  this.name = name;
  this.cost = +cost;
}

let companiesExpensesFunction = companies.map(
  (company) =>
    new companiesExpenses(
      company,
      dataObject
        .filter(
          (transaction) => transaction.detailsOfPayent.company === company
        )
        .reduce(
          (previousValue, currentTransaction) =>
            +previousValue + +currentTransaction.cost,
          0
        )
        .toFixed(2)
    )
);

//How much money was spent by the type of transaction

const typesOfTranscation = [
  ...new Set(dataObject.map((transaction) => transaction.detailsOfPayent.Type)),
].sort();

function expensesByType(type, cost) {
  this.type = type;
  this.cost = +cost;
}

let expensesByTypeFunction = typesOfTranscation.map(
  (type) =>
    new expensesByType(
      type,
      dataObject
        .filter((transaction) => transaction.detailsOfPayent.Type === type)
        .reduce(
          (previousValue, currentTransaction) =>
            +previousValue + +currentTransaction.cost,
          0
        )
        .toFixed(2)
    )
);

//How much money was spent each month

const months = [
  ...new Set(
    dataObject.map(
      (transaction) => transaction.detailsOfPayent.date.split("-")[1]
    )
  ),
].sort();

function expensesByMonth(month, cost) {
  let nameOfMonth;
  switch (month) {
    case "01":
      nameOfMonth = "January";
      break;
    case "02":
      nameOfMonth = "February";
      break;
    case "03":
      nameOfMonth = "March";
      break;
    case "04":
      nameOfMonth = "April";
      break;
    case "05":
      nameOfMonth = "May";
      break;
    case "06":
      nameOfMonth = "June";
      break;
    case "07":
      nameOfMonth = "July";
      break;
    case "08":
      nameOfMonth = "August";
      break;
    case "09":
      nameOfMonth = "September";
      break;
    case "10":
      nameOfMonth = "October";
      break;
    case "11":
      nameOfMonth = "November";
      break;
    case "12":
      nameOfMonth = "December";
      break;
  }
  this.month = nameOfMonth;
  this.cost = +cost;
}

let expensesByMonthFunction = months.map(
  (month) =>
    new expensesByMonth(
      month,
      dataObject
        .filter(
          (transaction) =>
            transaction.detailsOfPayent.date.split("-")[1] === month
        )
        .reduce(
          (previousValue, currentTransaction) =>
            +previousValue + +currentTransaction.cost,
          0
        )
        .toFixed(2)
    )
);

//How much money was spent each day of the week

const days = [
  ...new Set(
    dataObject.map((transaction) =>
      new Date(
        transaction.detailsOfPayent.date.split("-")[2],
        transaction.detailsOfPayent.date.split("-")[1] - 1,
        transaction.detailsOfPayent.date.split("-")[0]
      ).getDay()
    )
  ),
].sort();

function expensesByDay(day, cost) {
  let nameOfDay;
  switch (day) {
    case 0:
      nameOfDay = "Sunday";
      break;
    case 1:
      nameOfDay = "Monday";
      break;
    case 2:
      nameOfDay = "Tuesday";
      break;
    case 3:
      nameOfDay = "Wednesday";
      break;
    case 4:
      nameOfDay = "Thursday";
      break;
    case 5:
      nameOfDay = "Friday";
      break;
    case 6:
      nameOfDay = "Saturday";
      break;
  }
  this.day = nameOfDay;
  this.cost = +cost;
}
let expensesByDayFunction = days.map(
  (day) =>
    new expensesByDay(
      day,
      dataObject
        .filter(
          (transaction) =>
            new Date(
              transaction.detailsOfPayent.date.split("-")[2],
              transaction.detailsOfPayent.date.split("-")[1] - 1,
              transaction.detailsOfPayent.date.split("-")[0]
            ).getDay() === day
        )
        .reduce(
          (previousValue, currentTransaction) =>
            +previousValue + +currentTransaction.cost,
          0
        )
        .toFixed(2)
    )
);

//Return object

const dataSummary = {
  balanceOf2014,
  companiesExpensesFunction,
  expensesByTypeFunction,
  expensesByMonthFunction,
  expensesByDayFunction,

  getValues() {
    console.log(`Money spent in 2014:`);
    console.log(this.balanceOf2014);
    console.log(`Which company spent how much:`);
    console.log(this.companiesExpensesFunction);
    console.log(`How much money was spent by the type of transaction`);
    console.log(this.expensesByTypeFunction);
    console.log(`How much money was spent each month:`);
    console.log(this.expensesByMonthFunction);
    console.log(`How much money was spent each day of the week`);
    console.log(this.expensesByDayFunction);
  },
};
