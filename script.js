// Caching vars
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const changeFactor = document.getElementById("change-factor");
const result = document.getElementById("result");
const calc = document.getElementById("calc");

// calc.addEventListener("click", function)
let timeResult, timeConvertHr, timeConvertMin;
calc.addEventListener("click", function() {
	timeResult = (((Number(hours.value) * 60) + Number(minutes.value)) / Number(changeFactor.value));
	timeConvertHr = Math.floor(timeResult / 60);
	timeConvertMin = Math.round(timeResult % 60);
	if (changeFactor.value < 1){
		result.innerHTML = `Lengthened to ${timeConvertHr}h ${timeConvertMin}min.`;
	} else {
		result.innerHTML = `Shortened to ${timeConvertHr}h ${timeConvertMin}min.`;
	}
});

