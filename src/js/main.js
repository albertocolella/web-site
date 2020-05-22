import '@fortawesome/fontawesome-free/js/all'
import '@scss/style.scss'

import Svg from '@assets/svg/instagram_colored.svg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = Svg;
 // element.style.display = "none"; 

  return element;
}

document.body.appendChild(component());