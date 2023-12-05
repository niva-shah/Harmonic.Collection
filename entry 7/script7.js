const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.classList.add('current');
    } else {
      page.classList.remove('current');
    }
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showPage(currentPage);

  document.addEventListener('click', (event) => {
    const { clientX } = event;
    const { left, width } = document.querySelector('.book').getBoundingClientRect();
    const clickPosition = clientX - left;

    if (clickPosition > width / 2) {
      nextPage();
    } else {
      prevPage();
    }
  });
});
