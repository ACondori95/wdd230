const bannerfill = document.getElementById('banner');
const todayDate = new Date();
const dow = todayDate.getDate();

if (dow == 1 || dow == 2) {
  bannerfill.style.display = 'block';
} else {
  bannerfill.style.display = 'none';
}