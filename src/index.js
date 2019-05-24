import _ from "lodash";
import { header } from "./header.js";

function component() {
  const element = document.createElement("h1");
  element.innerHTML = _.join(["Hello", "World"], " ");

  return element;
}

// const component = () => {
//   const element = document.createElement("h1");
//   element.innerHTML = _.join(["Hello", "World"], " ");
//   return element;
// };

document.body.appendChild(component());
document.body.appendChild(header());
