/**
 * ! problem no:01
 * 
 Write a JavaScript program to display the current day and time in the following format.
 Sample Output : Today is : Tuesday.
 Current time is : 10 PM : 30 : 38 
 */

setInterval(() => {
  let date = new Date();
  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = date.getDay();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? " PM" : " AM";
  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("problem1").innerHTML =
    "Current time is: " + hours + ":" + minutes + ":" + seconds + ampm;
  document.getElementById("date").innerHTML = "Today is: " + dayList[today];
});

/**
 * ! problem no: 02
 * 
 Write a JavaScript program to print the contents of the current window. 
 */

document.getElementById("problem2").addEventListener("click", () => {
  window.print();
});

/**
 * ! problem no: 03
 * 
 Write a JavaScript program to get the current date
 Expected Output :
 mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

document.getElementById("problem3").addEventListener("click", () => {
  let p3Date = new Date(); //! p3Date means problem3 date

  let day = p3Date.getDate();
  day = day < 10 ? "0" + day : day;

  let month = p3Date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;

  let year = p3Date.getFullYear();

  document.getElementById(
    "currentDate"
  ).innerHTML = `${month}-${day}-${year} | 'mm-dd-yyyy' <br> ${day}-${month}-${year} | 'dd-mm-yyyy <br>${day}/${month}/${year} | 'dd/mm/yyyy' `;
});

/**
 * ! problem no: 04
 * 
 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 */

document.getElementById("problem4").addEventListener("click", () => {
  const side1 = Number.parseInt(document.getElementById("side1").value);
  const side2 = Number.parseInt(document.getElementById("side2").value) ;
  const base = Number.parseInt(document.getElementById("base").value) ;

  sumDivided = (side1 + side2 + base) / 2
  area = Math.sqrt(
    sumDivided *
      ((sumDivided - side1) * (sumDivided - side2) * (sumDivided - base))
  );

  document.getElementById("problem4OutPut").innerHTML = area.toFixed(2);
});
