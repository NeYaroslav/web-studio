class Controller {
  #_controllers
  #_activeClass
  #_selectedController = null
  #_attribute

  constructor(controllers, activeClass, attribute) {
    this.#_controllers = controllers
    this.#_activeClass = activeClass
    this.#_attribute = attribute
  }
  selectController(controller) {
    this.#_controllers.forEach(controller => {
      controller.classList.remove(this.#_activeClass)
    })
    this.#_selectedController = controller
    this.#_selectedController.classList.add(this.#_activeClass)
  }
  getSelectedValue() {
    return this.#_selectedController.getAttribute(this.#_attribute)
  }
}
export default Controller