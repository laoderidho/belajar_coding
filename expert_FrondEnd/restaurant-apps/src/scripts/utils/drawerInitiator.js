const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', () => {
      this._toggleDrawer(drawer);
    });

    content.addEventListener('click', () => {
      this._closeDrawer(drawer);
    });
  },

  _toggleDrawer(drawer) {
    drawer.classList.toggle('hamburger-toogle');
  },

  _closeDrawer(drawer) {
    drawer.classList.remove('hamburger-toogle');
  },
};

export default DrawerInitiator;
