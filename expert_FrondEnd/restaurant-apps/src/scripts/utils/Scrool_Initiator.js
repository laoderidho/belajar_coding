const ScrollDownMenuBlack = {
  init(navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this._scrollDown(navbar);
      } else {
        this._scrollup(navbar);
      }
    });
  },

  _scrollup(navbar) {
    navbar.style.backgroundColor = 'transparent';
  },

  _scrollDown(navbar) {
    navbar.style.backgroundColor = '#000000';
  },
};

export default ScrollDownMenuBlack;
