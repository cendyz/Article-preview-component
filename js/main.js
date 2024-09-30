const panel = document.querySelector(".card__share-panel");
const bg = document.querySelector(".card__bg");
const desktopPanel = document.querySelector(".card__box-btn-desktop");
const desktopBtn = document.querySelector("#desktop-btn");
const mobileBtn = document.querySelector("#mobile-btn");
const mobileBtnImg = document.querySelector("#mobile-btn img");
const card = document.querySelector(".card");
let check = false;

const showPanel = () => {
	panel.classList.add("panel-switch");
	bg.classList.add("bg-switch");
};

const hidePanel = () => {
	panel.classList.remove("panel-switch");
	bg.classList.remove("bg-switch");
};

const handleDesktop = () => {
	if (!check) {
		showPanelDekstop();
	} else {
		hidePanelDekstop();
	}
	event.stopPropagation();
};
const showPanelDekstop = () => {
	desktopPanel.style.display = "flex";
	check = true;
};

const hidePanelDekstop = () => {
	desktopPanel.style.display = "none";
	check = false;
};

const widthCheck = () => {
	const width = window.innerWidth;

	if (width > 996) {
		hidePanel();
	} else if (width < 996) {
		hidePanelDekstop();
	}
};

const isClickedOutside = (target, elements) => {
	return elements.every(el => el !== target && !el.contains(target));
};

mobileBtn.addEventListener("click", showPanel);
desktopBtn.addEventListener("click", handleDesktop);
window.addEventListener("resize", widthCheck);
document.addEventListener("click", e => {
	if (isClickedOutside(e.target, [panel, mobileBtn, mobileBtnImg])) {
		hidePanel();
	}
	
	if (isClickedOutside(e.target, [desktopPanel, desktopBtn])) {
		hidePanelDekstop();
	}
});
