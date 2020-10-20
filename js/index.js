const sections = document.getElementsByClassName("hero__section");
const leftButtons = document.getElementsByClassName("left-button");
const rightButtons = document.getElementsByClassName("right-button");
const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const logo = document.getElementById("logo");

for (let button of leftButtons) {
	button.addEventListener("click", changeSectionLeft);
}

for (let button of rightButtons) {
	button.addEventListener("click", changeSectionRight);
}

hamburger.addEventListener("click", () => {
	toggleHiddenMobileClass(navbar);
	hamburger.style.display = 'none';
	toggleHiddenClass(close);
	toggleHiddenMobileClass(logo);
});

close.addEventListener("click", () => {
	toggleHiddenMobileClass(navbar);
    hamburger.style.display = 'block';
	toggleHiddenClass(close);
	toggleHiddenMobileClass(logo);
});

function changeSectionLeft() {
	const currentSection = getCurrentSection();
	toggleHiddenClass(currentSection);
	const previousSection = getPreviousSection(currentSection);
	toggleHiddenClass(previousSection);
}

function changeSectionRight() {
	const currentSection = getCurrentSection();
	toggleHiddenClass(currentSection);
	const nextSection = getNextSection(currentSection);
	toggleHiddenClass(nextSection);
}

function getCurrentSection() {
	const currentSectionIndex = Array.from(sections).findIndex(
		(section) => !Array.from(section.classList).includes("hidden")
	);
	return sections[currentSectionIndex];
}

function getPreviousSection(currentSection) {
	const currentSectionIndex = getSessionIndex(currentSection);
	if (currentSectionIndex === 0) {
		return sections[2];
	}
	return sections[currentSectionIndex - 1];
}

function getSessionIndex(section) {
	return Array.from(sections).findIndex((sec) => sec === section);
}

function getNextSection(currentSection) {
	const currentSectionIndex = getSessionIndex(currentSection);
	if (currentSectionIndex === 2) {
		return sections[0];
	}
	return sections[currentSectionIndex + 1];
}

function toggleHiddenClass(section) {
	section.classList.toggle("hidden");
}

function toggleHiddenMobileClass(nav) {
	nav.classList.toggle("hidden__mobile");
}
