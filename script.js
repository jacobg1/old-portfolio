console.log('hello world')
var counter = 2
var first = document.getElementById('projectsContainerOne')
var second = document.getElementById('projectsContainerTwo')
second.style.display = 'none'

function nextProject () {
  switch (counter) {
    case 1:
      break
    case 2:
      counter++
      first.style.display = 'none'
      second.style.display = 'block'
      break
    default:

  }
}
function prevProject () {
  switch (counter) {
    case 2:
      break
    case 3:
      first.style.display = 'block'
      second.style.display = 'none'
      counter--
      break
    default:

  }
  console.log(counter)
}
