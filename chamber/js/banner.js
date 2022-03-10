const banner_msg = document.getElementById('banner');
const todayDate = new Date();
const dow = todayDate.getDay();

if (dow == 1 || dow == 2) {
  banner_msg.style.display = 'block';
} else {
  banner_msg.style.display = 'none';
}