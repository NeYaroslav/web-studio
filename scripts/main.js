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

const instagramIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_492)">
<path d="M19.9804 5.88005C19.9336 4.81738 19.7617 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2256 0.109427 14.163 0.0625732C13.0924 0.0117516 12.7525 0 10.0371 0C7.32173 0 6.98185 0.0117516 5.91521 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48904 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812743 2.78573 0.562603 3.44992C0.31643 4.0868 0.144583 4.81341 0.0977294 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937614 14.1239C0.140615 15.1865 0.312615 15.9171 0.558787 16.5502C0.812743 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82088 19.2265 3.48508 19.4765C4.12195 19.7226 4.84856 19.8945 5.91139 19.9413C6.97788 19.9883 7.31791 19.9999 10.0333 19.9999C12.7487 19.9999 13.0885 19.9883 14.1552 19.9413C15.2179 19.8945 15.9484 19.7226 16.5813 19.4765C17.9254 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9727 14.1239C20.0195 13.0572 20.0313 12.7173 20.0313 10.002C20.0313 7.28658 20.0273 6.9467 19.9804 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8356 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.5851 17.9372 15.0538 18.1012 14.0809 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37255 18.2027 7.05221 18.1911 6.00113 18.1441C5.02438 18.1012 4.49693 17.9372 4.1453 17.8004C3.71171 17.6402 3.31704 17.3862 2.9967 17.0541C2.6646 16.7298 2.41065 16.3391 2.2504 15.9055C2.11365 15.5539 1.94959 15.0225 1.90671 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.90671 5.96995C1.94959 4.99319 2.11365 4.46575 2.2504 4.11412C2.41065 3.68038 2.6646 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03231 1.9184 6.0051 1.87537C7.05999 1.82851 7.37652 1.81676 10.0449 1.81676C12.7174 1.81676 13.0337 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9407 2.21921C16.3742 2.37931 16.7689 2.63327 17.0893 2.96536C17.4213 3.28967 17.6753 3.68038 17.8356 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2263 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2263 12.9908 18.1794 14.0457Z" fill="currentColor"/>
<path d="M10.0371 4.8642C7.20074 4.8642 4.89941 7.16537 4.89941 10.0019C4.89941 12.8385 7.20074 15.1396 10.0371 15.1396C12.8737 15.1396 15.1749 12.8385 15.1749 10.0019C15.1749 7.16537 12.8737 4.8642 10.0371 4.8642ZM10.0371 13.3346C8.19702 13.3346 6.70442 11.8422 6.70442 10.0019C6.70442 8.16165 8.19702 6.66921 10.0371 6.66921C11.8774 6.66921 13.3698 8.16165 13.3698 10.0019C13.3698 11.8422 11.8774 13.3346 10.0371 13.3346Z" fill="currentColor"/>
<path d="M16.5775 4.6611C16.5775 5.32346 16.0404 5.86052 15.3779 5.86052C14.7155 5.86052 14.1785 5.32346 14.1785 4.6611C14.1785 3.99858 14.7155 3.46167 15.3779 3.46167C16.0404 3.46167 16.5775 3.99858 16.5775 4.6611Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1_492">
<rect width="20" height="20" fill="transparent"/>
</clipPath>
</defs>
</svg>
`
const facebookIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_482)">
<path d="M13.3308 3.32083H15.1567V0.140833C14.8417 0.0975 13.7583 0 12.4967 0C9.86416 0 8.06082 1.65583 8.06082 4.69917V7.5H5.15582V11.055H8.06082V20H11.6225V11.0558H14.41L14.8525 7.50083H11.6217V5.05167C11.6225 4.02417 11.8992 3.32083 13.3308 3.32083Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1_482">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`
const linkedinIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_476)">
<path d="M19.995 20V19.9992H20V12.6642C20 9.07587 19.2275 6.31171 15.0325 6.31171C13.0158 6.31171 11.6625 7.41837 11.11 8.46754H11.0517V6.64671H7.07416V19.9992H11.2158V13.3875C11.2158 11.6467 11.5458 9.96337 13.7017 9.96337C15.8258 9.96337 15.8575 11.95 15.8575 13.4992V20H19.995Z" fill="currentColor"/>
<path d="M0.330017 6.64746H4.47668V20H0.330017V6.64746Z" fill="currentColor"/>
<path d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1_476">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`
const twitterIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_486)">
<path d="M20 3.79875C19.2562 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4413 2.18C18.6488 2.6525 17.7737 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5762 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7912 2.23375 11.7362C2.765 13.36 4.2725 14.5537 6.065 14.5925C4.67 15.6837 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3262 0 16.285C1.81625 17.4562 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9537 6.10125 17.945 5.9275C18.7587 5.35 19.4425 4.62875 20 3.79875Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1_486">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`

function run() {
  const itemsAttribute = 'data-role'
  const controllersAttribute = 'data-selector'
  const acctiveClass = 'gallery__header-item_active'

  const controllers = document.querySelectorAll(`[${controllersAttribute}]`)
  const works = document.querySelectorAll(`[${itemsAttribute}]`)

  const instagramIconWrappers = document.querySelectorAll('[data-icon="instagram"]')
  const facebookIconWrappers = document.querySelectorAll('[data-icon="facebook"]')
  const linkedinIconWrappers = document.querySelectorAll('[data-icon="linkedin"]')
  const twitterIconWrappers = document.querySelectorAll('[data-icon="twitter"]')

  instagramIconWrappers.forEach(instagramIconWrapper => {
    instagramIconWrapper.innerHTML = instagramIcon
  });
  facebookIconWrappers.forEach(facebookIconWrapper => {
    facebookIconWrapper.innerHTML = facebookIcon
  })
  linkedinIconWrappers.forEach(linkedinIconWrapper => {
    linkedinIconWrapper.innerHTML = linkedinIcon
  })
  twitterIconWrappers.forEach(twitterIconWrapper => {
    twitterIconWrapper.innerHTML = twitterIcon
  })

  if(!controllers.length || !works.length) return

  new Listener(controllers, works, acctiveClass, itemsAttribute, controllersAttribute)
    .listen(0)
}

run()