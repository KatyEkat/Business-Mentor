console.log("KatyEkat");

const form = document.getElementById("test-form");
const input = document.getElementById("name");
const btn = document.querySelector(".form__button");

btn.classList.add("form__button--default");

function toggleClass(element, className, condition) {
	element.classList.toggle(className, condition);
}

input.addEventListener("input", () => {
	toggleClass(input, "form__input--filled", input.value.trim().length > 0);
});

input.addEventListener("focus", () => {
	input.classList.add("form__input--hover");
});

input.addEventListener("blur", () => {
	input.classList.remove("form__input--hover");
});

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const empty = !input.value.trim();

	toggleClass(input, "form__input--error", empty);
	if (empty) return;

	btn.classList.remove("form__button--default");
	btn.classList.add("form__button--success");

	console.log("Форма отправлена!");
});
