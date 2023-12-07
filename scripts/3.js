const button = document.querySelector("#button");

window.onload = () => {
	button.style.left = `${(window.innerWidth - button.offsetWidth) / 2}px`;
	button.style.top = `calc(${
		(window.innerHeight - button.offsetHeight) / 2
	}px + 1.5em)`;
};

const teleport = () => {
	button.style.left = `${Math.floor(
		Math.random() * (window.innerWidth - button.offsetWidth)
	)}px`;
	button.style.top = `${Math.floor(
		Math.random() * (window.innerHeight - button.offsetHeight)
	)}px`;
};

let interval;

button.onmouseover = () => {
	button.disabled = true;
	teleport();
	interval = setInterval(teleport, 100);
};

button.onmouseout = () => {
	button.disabled = false;
	clearInterval(interval);
};

button.onclick = () => {
	alert("8405");
};
