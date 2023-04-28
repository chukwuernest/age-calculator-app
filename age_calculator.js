const input_year= document.getElementById('year')
const input_month = document.getElementById('month')
const input_day = document.getElementById('day')
const age_year= document.querySelector('.year-output')
const age_month = document.querySelector('.month-output')
const age_day = document.querySelector('.day-output')
const day_error = document.querySelector('.day-error')
const month_error = document.querySelector('.month-error')
const year_error  = document.querySelector('.year-error')

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
  let year = input_year.value
 let age = date.getFullYear() -year;
 let dage = age - 1
 let month = input_month.value
let agemont = date.getMonth()+1 - month
 //conditions on year
 if (date.getMonth()+1<month) {
  document.getElementById('year_display').innerHTML=`${dage}Year`;
}
   if (date.getFullYear()<year) {
  year_error.style.visibility = 'visible';
  document.getElementById('year_display').innerHTML=`--Year`;
 }
 if (date.getFullYear()>year && date.getMonth()+1>month) {
  document.getElementById('year_display').innerHTML=`${age}Year`;
 }
 if (year<= 0) {
  document.getElementById('year_display').innerHTML=`--Year`;
  }
else(year > 0 && year == Number)
 {
  year_error.style.visibility = 'hidden';
  }
 }
//this fuction calculate the month and add conditions
function cal_month() {
  let month = input_month.value
  let agemonth = date.getMonth()+1 - month
  let greatermonth =  agemonth + 12
  //conditions for month
if (date.getMonth()+1<month) {
document.getElementById('month_display').innerHTML=`${greatermonth} Month`;
}
if (date.getMonth()+1>=month) {
  document.getElementById('month_display').innerHTML=`${agemonth} Month`;
}
if (month <= 0 || month>= 13) {
  month_error.style.visibility = 'visible';
  document.getElementById('month_display').innerHTML=`--Month`;
}
  if (month== "") {
     document.getElementById('month_display').innerHTML=`--Month`
  }
 else(month> 0 && month== Number)
 {
  month_error.style.visibility = 'hidden';
  }
}
// //this fuction calculate the day and add conditions
function cal_day() {
 let day = input_day.value
 let lday = date.getDate() - day
 let gday = day - date.getDate()
//condition for day
if (date.getDate()<day) {
document.getElementById('day_display').innerHTML=`${gday} Days`;
}
if (date.getDate()>day) {
  document.getElementById('day_display').innerHTML=`${lday} Days`;
}
if (day <= 0 || day>= 31) {
  day_error.style.visibility = 'visible';
  document.getElementById('day_display').innerHTML=`--Days`;
}
  if (lday== 1 || gday==1) {
     document.getElementById('day_display').innerHTML=`${lday}Day`
  }
  if (gday==1) {
     document.getElementById('day_display').innerHTML=`${gday}Day`
  }
 else(day> 0 && day>=31)
 {
  day_error.style.visibility = 'hidden';
  }  
}
  



