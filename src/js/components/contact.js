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

    const containerContact = document.querySelector(select.containerOf.contact);
    containerContact.appendChild(generatedElem);
  }
}

export default Contact;
