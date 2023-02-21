import { templates, select, path } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(data) {
    const thisProduct = this;
    thisProduct.render(data);
    console.log(data);
  }

  render(data) {
    for (let key of Object.keys(data)) {
      var dane = data[key];
      dane.pathImages = path.products;
      dane.path = path.images;
      // dane.roastingRank = `${dane.roastingRank}`;
      const homeProduct = templates.product(dane); // settings.js -> export const templates () tutaj wybierasz tak naprawdę template do uzywania po przez stałą templates i slider
      const generatedElem = utils.createDOMFromHTML(homeProduct);

      const containerSlider = document.querySelector(
        select.containerOf.productList
      );
      containerSlider.appendChild(generatedElem);
    }
  }
}

export default Product;
