console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

// let navLinks = $$("nav a")
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)
// currentLink?.classList.add("current");

//create nav on each page
let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
	{url: "contact/", title: "Resume"},
    {url: "resume/", title: "Contact"},
    {url: "https://github.com/cammyt5", title: "Github"},
];

let nav = document.createElement("nav");
document.body.prepend(nav);
const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
	let url = p.url;
    url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
	let title = p.title;
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);
    if (a.host !== location.host) {
        a.setAttribute("target", "_blank")
    }
    nav.append(a);
}

//create theme selector
document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme"> 
        Theme:
        <select>
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
		</select>
	</label>`
);

function setColorScheme(colorScheme) {
    document.documentElement.style.setProperty("color-scheme", colorScheme);
}

const select = document.querySelector('select')
select.addEventListener("input", function (event) {
    const val = event.target.value
    setColorScheme(val);
    localStorage.colorScheme = val;
});

if ("colorScheme" in localStorage) {
    const cs = localStorage.colorScheme
    setColorScheme(cs);
    select.value = cs;
}