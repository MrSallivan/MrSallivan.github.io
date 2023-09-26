//Select DOM Items
const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const menuNav = document.querySelector(".menu-nav")
const menuBranding = document.querySelector(".menu-branding")
const navItems = document.querySelectorAll(".nav-item")

//Set Initial State of Menu

let showMenu = false

menuBtn.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close")
    menu.classList.add("show")
    menuNav.classList.add("show")
    menuBranding.classList.add("show")
    navItems.forEach((item) => item.classList.add("show"))
    //Set menu state
    showMenu = true
  } else {
    menuBtn.classList.remove("close")
    menu.classList.remove("show")
    menuNav.classList.remove("show")
    menuBranding.classList.remove("show")
    navItems.forEach((item) => item.classList.remove("show"))
    //Set menu state
    showMenu = false
  }
}
let projects = document.querySelectorAll("#work .boxes div")

 projects.forEach( item =>{
	item.addEventListener("click", (e)=>{
		e.preventDefault()
		let datasetId = e.currentTarget.dataset.id
		let listProjects = document.querySelectorAll(".item")
		listProjects.forEach((listItem) => {
      if (listItem.classList.contains("hidden")) {
        listItem.classList.remove("hidden")
      }
      if (datasetId !== listItem.dataset.id) {
        listItem.classList.add("hidden")
      }
      if (datasetId === "all") {
        listItem.classList.remove("hidden")
      }
    })
	})
 })

