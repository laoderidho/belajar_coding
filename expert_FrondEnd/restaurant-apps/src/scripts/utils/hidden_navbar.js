const hiddenHeader = {
  init({ header, pages }) {
    if (window.location.pathname === pages) {
      this.hiddenNavbar(header);
    } else {
      this.showNavbar(header);
    }
  },
  hiddenNavbar(header) {
    header.style.display = 'none';
  },
  showNavbar(header) {
    header.style.display = 'block';
  },
};

export default hiddenHeader;
