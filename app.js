const MenuToggle = document.getElementById("menuToggle");
const MenuSection = document.getElementById("menu-section");
const UserToggle = document.getElementById("userToggle");
const BtnsSection = document.getElementById("btns-section");
const SearchBar = document.getElementById("search-section")
const SearchBtn = document.getElementById("SearchToggle")

MenuToggle.addEventListener(('click'), () => {
    MenuSection.classList.toggle("show__menu");
    BtnsSection.classList.remove("btns-show");
    SearchBar.classList.remove("show-search");
})
UserToggle.addEventListener(('click'), () => {
    BtnsSection.classList.toggle("btns-show");
    MenuSection.classList.remove("show__menu");
    SearchBar.classList.remove("show-search");
})
SearchBtn.addEventListener(('click'), () => {
    SearchBar.classList.toggle("show-search");
    BtnsSection.classList.remove("btns-show");
        MenuSection.classList.remove("show__menu");
})