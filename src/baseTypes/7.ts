/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: Day): boolean => {
  return day === Day.Saturday || day === Day.Sunday ? true : false;
};
console.log(
  isWeekend(Day.Sunday) ? "Its weekend, time to relax 😃" : "Time to work!"
);
