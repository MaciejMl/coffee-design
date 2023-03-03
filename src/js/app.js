/* eslint-disable no-unused-vars */

import { settings, select, templates, classNames } from './settings.js';
import Slider from './components/Slider.js';
import Product from './components/Product.js';
import AboutUs from './components/AboutUs.js';
import Contact from './components/contact.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.navi.links);
    const idFromHash = window.location.hash.replace('#/', '');
    console.log(thisApp.productsHTML);
    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const ClickedElement = this;
        event.preventDefault();

        const id = ClickedElement.getAttribute('href').replace('#', '');
        console.log(id);

        thisApp.activatePage(id);

        window.location.hash = `#/${id}`;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;
    /* add class "active" to matching pages, remove from non-matchin */
    const sliderMain = document.querySelector('#slider');

    for (let page of thisApp.pages) {
      sliderMain.classList.add(classNames.pages.active);
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class "active" to matching links, remove from non-matchin */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == `#${pageId}`
      );
    }
  },

  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.data;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (out) {
        thisApp.data = out;
        thisApp.initHomeSite(thisApp.data);
      });
  },

  initHomeSite: function (data) {
    const thisApp = this;
    thisApp.initHomeSlider(data.slider);
    thisApp.initHomeProductList(data.products);
    thisApp.initInfo(data.info);
    thisApp, this.initContact();
    // thisApp.initActions();
  },

  initHomeSlider: function (data) {
    new Slider(data);
  },
  initHomeProductList: function (data) {
    new Product(data);
  },
  initInfo: function (data) {
    new AboutUs(data);
  },
  initContact: function () {
    new Contact();
  },
  initActions: function () {
    const activePages = document.querySelectorAll('.startup');
    console.log(activePages);

    for (let activePage of activePages) {
      if (
        activePage.getAttribute('id') == 'home-slider' ||
        activePage.getAttribute('id') == 'products' ||
        activePage.getAttribute('id') == 'about-us'
      ) {
        activePage.classList.add('active');
      }
    }
  },

  init: function () {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
  },
};

app.init();
