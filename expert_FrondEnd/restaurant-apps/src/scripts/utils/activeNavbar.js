const setActiveNavbar = {
  init({ link, currentHash }) {
    link.forEach(element => {
      const getLinkAtribute = element.getAttribute('href');
      if (getLinkAtribute === currentHash) {
        this._activeNavbar(element);
      } else {
        this._deactiveNavbar(element);
      }
    });
  },

  _activeNavbar(link) {
    link.classList.add('active');
  },

  _deactiveNavbar(link) {
    link.classList.remove('active');
  },
};

export default setActiveNavbar;
