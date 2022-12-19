import "./dropdown.css";

const dropdowns = document.querySelectorAll(".dropdown");

//add listeners for all dropdowns
dropdowns.forEach((dropdown) =>
  dropdown.addEventListener("click", (e) => handleDropDownClick(e, dropdown))
);

function handleDropDownClick(e, dropdown) {
  //if click on dropdown header toggle
  if (e.target.closest(".dropdown__header")) {
    toggleDropdown(dropdown);
  }

  //set new selected on option click
  if (e.target.closest(".dropdown__options")) {
    const selectedOption = dropdown.querySelector(".dropdown__selected-option");

    const clickedOption = e.target.closest(".dropdown__option");

    if (clickedOption) {
      selectedOption.innerHTML = clickedOption.innerHTML;
    }

    toggleDropdown(dropdown);
  }
}

function toggleDropdown(dropdown) {
  dropdown.classList.toggle("dropdown--opened");
}

// toggle on click outside dropdown
window.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    const dropdown = document.querySelector(".dropdown--opened");

    if (dropdown) {
      dropdown.classList.remove("dropdown--opened");
    }
  }
});
