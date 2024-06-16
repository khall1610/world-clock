function updateBathTime() {
  // Bath
  let bathElement = document.querySelector("#bath");
  let bathDateElement = bathElement.querySelector(".date");
  let bathTimeElement = bathElement.querySelector(".time");
  let bathCurrentTime = moment().tz("Europe/London");

  bathDateElement.innerHTML = bathCurrentTime.format("MMMM Do YYYY");
  bathTimeElement.innerHTML = bathCurrentTime.format("h:mm:ss A");
}
updateBathTime();
setInterval(updateBathTime, 1000);

function updateMarylandTime() {
  // Maryland
  let marylandElement = document.querySelector("#maryland");
  let marylandDateElement = marylandElement.querySelector(".date");
  let marylandTimeElement = marylandElement.querySelector(".time");
  let marylandCurrentTime = moment().tz("America/New_York");

  marylandDateElement.innerHTML = marylandCurrentTime.format("MMMM Do YYYY");
  marylandTimeElement.innerHTML = marylandCurrentTime.format("h:mm:ss A");
}
updateMarylandTime();
setInterval(updateMarylandTime, 1000);

function updatePerthTime() {
  // Perth

  let perthElement = document.querySelector("#perth");
  let perthDateElement = perthElement.querySelector(".date");
  let perthTimeElement = perthElement.querySelector(".time");
  let perthCurrentTime = moment().tz("Australia/Perth");

  perthDateElement.innerHTML = perthCurrentTime.format("MMMM Do YYYY");
  perthTimeElement.innerHTML = perthCurrentTime.format("h:mm:ss A");
}
updatePerthTime();
setInterval(updatePerthTime, 1000);
