const burgerButton = document.querySelector("#burgerIcon");
const menuBody = document.querySelector(".menu__body");

if (burgerButton) {
	burgerButton.addEventListener("click", () => {
		burgerButton.classList.toggle("_active");
		menuBody.classList.toggle("_active");
		document.body.classList.toggle('_lock')
	})
}