const bodyRef = document.querySelector("body");
const searchInputRef = document.querySelector(".search-form");

function onEscape(e) {
  if (e.key === "Escape") {
    const openElementRef = document.querySelector(".open");
    if (openElementRef) openElementRef.classList.toggle("open");
  }
}

const onClick = (e) => {
  e.preventDefault();
  const openElementRef = document.querySelector(".open");

  if (e.target.parentElement.classList.contains("nav-item-with-submenu")) {
    const navItemsWithSubmenuRef = e.target.parentElement;
    const navSubmenu = navItemsWithSubmenuRef.querySelector(".nav-submenu");
    navSubmenu.classList.toggle("open");
    if (openElementRef && navSubmenu !== openElementRef)
      openElementRef.classList.toggle("open");
  } else if (
    e.target.parentElement.classList.contains("top-header-search-box") ||
    e.target.parentElement.classList.contains("top-header-search-btn")
  ) {
    searchInputRef.classList.toggle("open");
    if (openElementRef && openElementRef !== searchInputRef)
      openElementRef.classList.toggle("open");
  } else if (openElementRef) openElementRef.classList.toggle("open");
};

bodyRef.addEventListener("click", onClick);
window.addEventListener("keydown", onEscape);
