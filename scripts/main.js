import Listener from './listener'


function run() {
  const itemsAttribute = 'data-role'
  const controllersAttribute = 'data-selector'
  const acctiveClass = 'gallery__header-item_active'
  
  const controllers = document.querySelectorAll(`[${controllersAttribute}]`)
  const works = document.querySelectorAll(`[${itemsAttribute}]`)
  
  const mailLink = document.querySelector('[href^="mailto"]')
  const modalCloseBtn = document.querySelector('.modal-window__close-btn')
  const modal = document.querySelector('.modal-wrpper')
  
  mailLink?.addEventListener('click', (e) => onModalOpen(e, modal))
  modalCloseBtn?.addEventListener('click',(e) => onModalClose(e, modal))
  
  if(!controllers.length || !works.length) return
  
  new Listener(controllers, works, acctiveClass, itemsAttribute, controllersAttribute)
    .listen(0)
}
run()
 
  
function onModalOpen (e, modal) {
  e.preventDefault()
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function onModalClose (e, modal) {
  modal.classList.remove('active')
  document.body.style.overflow = 'auto'
}