document.addEventListener("DOMContentLoaded", function() {

	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const today = new Date();
	const dayName = dayNames[today.getDay()];
	document.querySelector("[data-testid='currentDayOfTheWeek']").textContent  = dayName;


	const utcTime = today.toUTCString().split(" ")[4];
	document.querySelector("[data-testid='currentUTCTime']").textContent  = utcTime;

}

);