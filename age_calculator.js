const day_error = document.querySelector('.day-error')
const month_error = document.querySelector('.month-error')
const year_error  = document.getElementById('year-error')
const age_year= document.querySelector('.year-output')
const age_month = document.querySelector('.month-output')
const age_day = document.querySelector('.day-output')
const btn = document.querySelector('.btn')
var date = new Date();

// console.log(btn);
btn.addEventListener('click',(e) => {
 e.preventDefault();
 let year = cal_year();
 let month = cal_month();
let day =cal_day();
  
});
//this fuction calculate the year and add conditions
function cal_year() {
  
 let age = date.getFullYear() - year.value;
 document.getElementById('year_display').innerHTML=`${age} Year`;
 console.log(age);
 //conditions on year
 if (date.getFullYear()<year.value) {
  year_error.style.visibility = 'visible';
 }
  if (date.getFullYear()<year.value) {
  document.getElementById('year_display').innerHTML=`--Year`;
  
 }
}

//this fuction calculate the month and add conditions
function cal_month() {
  let agemonth = month.value - date.getMonth()
  document.getElementById('month_display').innerHTML=`${agemonth} Month`;
}

//this fuction calculate the day and add conditions
function cal_day() {
  let ageday = day.value
  document.getElementById('day_display').innerHTML=`${ageday} days`;

}
