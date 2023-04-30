import Controller from './Controller.js'
import Filter from './Filter.js'

class Listener {
  #_itemsFilter
  #_controller
  #_controllers

  constructor (controllers, items, activeClass, itemsAttribute, controllersAttribute) {
    this.#_itemsFilter = new Filter(items, itemsAttribute)
    this.#_controller = new Controller(controllers, activeClass, controllersAttribute)
    this.#_controllers = controllers
  }
  listen(defaultValue) {
    this.#_controller.selectController(this.#_controllers[defaultValue])

    this.#_controllers.forEach(controller => {

      controller.addEventListener('click', (e) => {
        this.#_controller.selectController(e.target)
        const pattern = this.#_controller.getSelectedValue()
        this.#_itemsFilter.filter(pattern)
      })

    })
  }
}

export default Listener
