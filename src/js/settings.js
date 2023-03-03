export const select = {
  templateOf: {
    slider: '#template-slider',
    productsList: '#template-products',
    info: '#template-info',
    contact: '#template-contact',
  },
  containerOf: {
    slider: '.home-slider',
    productList: '#products',
    info: '#about-us',
    contact: '#contact',
    burgerLinks: '.icon-menu',
    navLinks: '.main-nav',
    pages: '#pages',
  },
  navi: {
    links: '.main-links',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};

export const settings = {
  db: {
    // url: '//localhost:3131',
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    data: 'dane',
  },
};

export const path = {
  images: '/images/',
  products: '/images/products/',
};

export const templates = {
  slider: Handlebars.compile(
    document.querySelector(select.templateOf.slider).innerHTML
  ),
  product: Handlebars.compile(
    document.querySelector(select.templateOf.productsList).innerHTML
  ),
  info: Handlebars.compile(
    document.querySelector(select.templateOf.info).innerHTML
  ),
  contact: Handlebars.compile(
    document.querySelector(select.templateOf.contact).innerHTML
  ),
};
