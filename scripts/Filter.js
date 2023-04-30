class Filter {
  #_items
  #_attribute

  constructor(items, attribute) {
    this.#_items = items
    this.#_attribute = attribute
  }
  filter(pattern) {
    this.#_items.forEach(item => {
      if(item.getAttribute(this.#_attribute) === pattern || pattern === '*') {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
  }
}
export default Filter