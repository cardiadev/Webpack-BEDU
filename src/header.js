import _ from "lodash";

export const header = () => {
  const element = document.createElement("h2");
  element.innerHTML = _.join(["Hola", "Mundo", "Cruel", "!!!"], " ");

  return element;
};

// export function header() {
//   const element = document.createElement("h2");
//   element.innerHTML = _.join(["Hola", "Mundo", "Cruel", "!!!"], " ");
//   return element;
// }
