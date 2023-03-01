/* eslint-disable no-unused-vars */

import { settings, select, templates } from './settings.js';
import Slider from './components/Slider.js';
import Product from './components/Product.js';
import AboutUs from './components/AboutUs.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

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
        thisApp.activatePage(id);

        window.location.hash = `#/${id}`;
      });
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

  init: function () {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();
