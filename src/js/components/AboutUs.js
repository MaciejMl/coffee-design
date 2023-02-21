import { templates, select, path } from '../settings.js';
import utils from '../utils.js';

class AboutUs {
  constructor(data) {
    const thisAboutUs = this;
    thisAboutUs.render(data);
    console.log(data);
  }

  render(data) {
    data.pathImages = path.images;
    const homeAboutUs = templates.info(data);
    const generatedElem = utils.createDOMFromHTML(homeAboutUs);

    const containerInfo = document.querySelector(select.containerOf.info);
    containerInfo.appendChild(generatedElem);
  }
}

export default AboutUs;
