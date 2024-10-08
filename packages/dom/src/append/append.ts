/**
 * Append one or several elements to the parent
 * @param parent - where to append
 * @param elements - element or elements list
 */
export function append(
  parent: Element | DocumentFragment,
  elements: Element | Element[] | DocumentFragment | Text | Text[]
): void {
  if (Array.isArray(elements)) {
    elements.forEach((el) => {
      parent.appendChild(el);
    });
  } else {
    parent.appendChild(elements);
  }
}
