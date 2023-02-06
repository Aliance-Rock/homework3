export const getPath = (inputElement) => {
  if (!inputElement) {
    return
  }
  const path = []
  let element = inputElement
  while (element?.nodeType === 1) {
    let selector = element.nodeName.toLowerCase();
    if(selector === 'html') {
      break
    }
    if (element.id) {
      selector += `#${element.id}`;
      path.unshift(selector);
      break;
    } else if(element.className) {
      selector += `.${element.className}`;
    } else {
      let sib = element, nth = 1;
      while (sib?.nodeName == sib?.previousElementSibling?.nodeName) {
        if (sib.nodeName.toLowerCase() == selector)
          nth++;
      }
      if (nth != 1)
        selector += ":nth-of-type("+nth+")";
    }
    path.unshift(selector);
    element = element.parentNode 
  }
  return path.join(" ");
};
