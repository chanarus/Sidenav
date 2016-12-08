'use strict';

class SideNav {
  constructor() {
    this.showButtonEl = document.querySelector('.js-menu-show');
    this.mainEl = document.querySelector('.main');
    this.hideButtonEl = document.querySelector('.js-menu-hide');
    this.sideNavEl = document.querySelector('.js-side-nav');
    this.sideNavContainerEl = document.querySelector('.js-side-nav__container');

    this.showSideNav = this.showSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);
    this.blockHide = this.blockHide.bind(this);

    this.addEventListeners();
  }

  addEventListeners() {
    this.showButtonEl.addEventListener('click', this.showSideNav);
    this.hideButtonEl.addEventListener('click', this.hideSideNav);
    this.sideNavEl.addEventListener('click', this.hideSideNav);
    this.sideNavContainerEl.addEventListener('click', this.blockHide);
  }

  blockHide (evt) {
    evt.stopPropagation();
  }

  showSideNav() {
    this.mainEl.classList.remove('main');
    this.mainEl.style.marginLeft = "415px";
    this.sideNavEl.classList.add('side-nav--visible');
    this.showButtonEl.style.visibility = "hidden";
  }

  hideSideNav() {
    this.mainEl.classList.remove('main');
    this.sideNavEl.classList.remove('side-nav--visible');
    this.mainEl.style.marginLeft = "95px";
    this.showButtonEl.style.visibility = "visible";
  }
}

new SideNav();
