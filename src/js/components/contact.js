import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor() {
    const thisContact = this;
    thisContact.render();
    console.log();
  }

  render() {
    const homeContact = templates.contact();
    const generatedElem = utils.createDOMFromHTML(homeContact);

    const containerInfo = document.querySelector(select.containerOf.contact);
    containerInfo.appendChild(generatedElem);
  }
}

export default Contact;
