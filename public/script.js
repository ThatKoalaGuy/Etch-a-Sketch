const div = document.createElement("div");
div.classList.add("block");
div.style.cssText =
	"border-color: aqua; border-style: solid; border-width: 1px;";

const container = document.querySelector(".container");

const breakLine = document.createElement("div");
breakLine.classList.add("break");

const button = document.querySelector("button");
let sideSize;

button.addEventListener("click", () => {
	sideSize = Number(
		prompt("Input an int for a side lenght, it must be 100 or less", 50)
	);

	if (sideSize > 100) {
		sideSize = Number(prompt("Input a number less than 100", 50));
	}

	container.replaceChildren();

	//Generate 8x8 square
	for (let i = 0; i < sideSize; i++) {
		for (let j = 0; j < sideSize; j++) {
			container.appendChild(div.cloneNode(true));
		}

		container.appendChild(breakLine.cloneNode(true));
	}

	const allDivs = document.querySelectorAll(".block");

	for (let i = 0; i < allDivs.length; i++) {
		allDivs[i].addEventListener("mouseover", () => {
			allDivs[i].style.cssText = "background-color: cyan; padding: 1px;";
		});
	}
});
