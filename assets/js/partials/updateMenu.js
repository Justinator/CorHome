function updateMenu() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll(".nav-list .nav-item");
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        menuItem[i].classList.remove("current");
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("current");
        }
    }

}

export default updateMenu;