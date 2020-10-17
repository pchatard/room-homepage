const sections = document.getElementsByClassName("hero__section");
console.log(sections);
const leftButtons = document.getElementsByClassName("left-button");
const rightButtons = document.getElementsByClassName("right-button");

for (let button of leftButtons) {
	button.addEventListener("click", changeSectionLeft);
}

for (let button of rightButtons) {
	button.addEventListener("click", changeSectionRight);
}

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
    return Array.from(sections).findIndex(
		(sec) => sec === section
    );
}

function getNextSection(currentSection) {
    const currentSectionIndex = getSessionIndex(currentSection);
    if (currentSectionIndex === 2) {
        return sections[0];
    }
    return sections[currentSectionIndex + 1];
}

function toggleHiddenClass(section) {
    section.classList.toggle('hidden');
}
