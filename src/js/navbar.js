// Animación navbar
const nav = document.getElementById("nav")

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    nav.classList.replace("tw-py-2", "tw-py-0")
  } else {
    nav.classList.replace("tw-py-0", "tw-py-2")
  }
}

// Funcionalidad de menú en dispositivos móviles
const menuItems = document.getElementById("menu-items")

export function showMenu() {
  if (menuItems.classList.contains("inactive")) {
    menuItems.classList.replace("inactive", "active")
    menuItems.classList.remove("animate__fadeOutLeftBig")
    menuItems.classList.add("animate__fadeInLeftBig")
    menuItems.classList.toggle("tw-hidden")
  } else {
    menuItems.classList.replace("active", "inactive")
    menuItems.classList.remove("animate__fadeInLeftBig")
    menuItems.classList.add("animate__fadeOutLeftBig")
    setTimeout(function() {
      menuItems.classList.toggle("tw-hidden")
    }, 1000)
  }
}
