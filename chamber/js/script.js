// toggle menu code
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// current date code
const datefield = document.querySelector("date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(
  now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// last modification
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;