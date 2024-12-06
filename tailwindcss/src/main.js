const topMenu = document.getElementById('mtq-top-menu')
const toggleTopMenuIcon = document.getElementById("mtq-toggle-top-menu-icon")

toggleTopMenuIcon.addEventListener('click',  (e) => {
if(toggleTopMenuIcon.contains(e.target)){
    topMenu.classList.toggle("mtq-topmenu-expanded")
    topMenu.classList.toggle("hidden")
} else {
    if(topMenu.classList.contains('mtq-topmenu-expanded')){
        topMenu.classList.remove('mtq-topmenu-expanded')
        topMenu.classList.add("hidden")
    }
}
}) 
