document.addEventListener('DOMContentLoaded', () => {

const cellElements = document.querySelectorAll('[data-cell]')



cellElements.forEach(cell => {
var current = cell.addEventListener('click', handleClick, {once:true})

function handleClick(e) {
  const cell = e.index

  console.log(cell);
}

})
















})
