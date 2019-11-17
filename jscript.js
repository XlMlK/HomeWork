let money = prompt ("Ваш бюджет на месяц?");
let date = prompt ("Введите дату в формате YYYY-MM-DD");
let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer1 = prompt ("Во сколько обойдется?");
let question2 = prompt("Введите ещё одну обязательную статью расходов в этом месяце?");
let answer2 = prompt ("Во сколько обойдется?");
console.log (money);
console.log (date);
let appDate = {
    budjet: money,
    timeData: date,
    expenses: {
        question1: answer1,
        question2: answer2,
    },
    optionalExpenses: [],
    //let income = []
    savings: false
};
alert("бюджет на 1 день =" + money/ 30);

