let timeDoing = 2;
let totalLine = 20;
let salaryHour = 20;
let expenseReview;
let salaryDay = timeDoing * salaryHour;
let salary;
if (totalLine < 10) {
    expenseReview = 1;
}
else if (totalLine <= 20) {
    expenseReview = 2;
} else {
    expenseReview = 5;
}
console.log(expenseReview);
salary = salaryDay - expenseReview;
console.log('Salary: ', salary);


