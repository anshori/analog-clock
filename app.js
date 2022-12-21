setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds() / 60
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
	setRotation(secondHand, secondsRatio)
	setRotation(minuteHand, minutesRatio)
	setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

// Get the current date and time
const currentDate = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = weekday[currentDate.getDay()];
const date = currentDate.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();
document.getElementById("date").innerHTML = day + ", " + date + " " + month + " " + year;