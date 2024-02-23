console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

let navLinks = $$("nav a")
console.log(navLinks)
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

for (let a of navLinks) {
    console.log(a.host, location.host, a.pathname, location.pathname)
}
currentLink?.classList.add("current");