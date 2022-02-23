const dateField = document.getElementById("date");
const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-us", { dateStyle: "full" }).format(now);
dateField.innerHTML = `<em>${fullDate}</em>`;

// Banner
function displayBanner() {
  let dayOfWeek = new Date().getDay();
  if (dayOfWeek==1 || 2 || 3) {
    document.getElementById('banner').style.display = 'block'
  } else {
    document.getElementById('banner').style.display = 'none'
  }
}

displayBanner()