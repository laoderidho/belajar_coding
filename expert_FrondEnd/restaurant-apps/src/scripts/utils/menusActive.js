const setMenusActive = ({ menuLinks, menuList }) => {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', event => {
      event.preventDefault();
      const target = menuLinks[i].getAttribute('data-target');
      showMenus(target, menuList, menuLinks);
    });
  }
};

const showMenus = (target, menuList, menuLinks) => {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.remove('active');
  }
  for (let i = 0; i < menuList.length; i++) {
    menuList[i].classList.remove('activeMenus');
  }

  const targetLink = document.querySelector(`[data-target="${target}"]`);
  targetLink.classList.add('active');
  const targetMenu = document.getElementById(target);
  targetMenu.classList.add('activeMenus');
};

export default setMenusActive;
