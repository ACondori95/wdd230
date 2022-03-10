const viewtype = 'O';
const ww = window.innerWidth;

if (ww >= 592 && ww <= 991) {
  toggleView();
  viewtype = 'M';
}

function toggleView() {
  document.getElementById('cardviewBtn').classList.toggle('open');
  document.getElementById('listviewBtn').classList.toggle('open');
  document.getElementById('bizdir').classList.toggle('open');
}

const lv = document.getElementById('listviewBtn');
lv.onclick = toggleView;

const c = document.getElementById('cardviewBtn');
c.onclick = toggleView;

function checkWidth() {
  ww = window.innerWidth;
  if (ww >= 592 && ww <= 991) {
    if (viewtype != 'M') {
      toggleView();
      viewtype = 'M';
    }
  } else {
    if (viewtype == 'M') {
      toggleView();
      viewtype = 'O';
    }
  }
}