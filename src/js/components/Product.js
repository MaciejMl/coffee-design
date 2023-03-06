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
      let products = data[key];
      products.pathImages = path.products;
      products.path = path.images;

      const homeProduct = templates.product(products);
      const generatedElem = utils.createDOMFromHTML(homeProduct);

      const containerProduct = document.querySelector(
        select.containerOf.productList
      );
      containerProduct.appendChild(generatedElem);
    }
  }
}

export default Product;
