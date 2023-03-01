import { templates, select, path } from '../settings.js';
import utils from '../utils.js';

class Slider {
  constructor(data) {
    const thisSlider = this;
    thisSlider.render(data);
    thisSlider.naviBurger(data);
  }

  render(data) {
    data.pathImages = path.images;
    const homeSlider = templates.slider(data); // settings.js -> export const templates () tutaj wybierasz tak naprawdę template do uzywania po przez stałą templates i slider
    const generatedElem = utils.createDOMFromHTML(homeSlider);

    const containerSlider = document.querySelector(select.containerOf.slider);
    containerSlider.appendChild(generatedElem);
  }

  naviBurger() {
    const burgerLink = document.querySelector(select.containerOf.burgerLinks);
    const navLinks = document.querySelector(select.containerOf.navLinks);

    burgerLink.addEventListener('click', function (event) {
      event.preventDefault();
      navLinks.classList.toggle('active');
    });
  }
}

export default Slider;
