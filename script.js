var counter = 2
console.log(counter)

var first = document.getElementById('projectsContainerOne')
var second = document.getElementById('projectsContainerTwo')
var third = document.getElementById('projectsContainerThree')

second.style.display = 'none'
third.style.display = 'none'

function nextProject () {
  switch (counter) {
    case 1:
      break
    case 2:
      first.style.display = 'none'
      second.style.display = 'block'
      counter++
      break
    case 3:
      counter++
      first.style.display = 'none'
      second.style.display = 'none'
      third.style.display = 'block'
      break
    default:
  }
  console.log(counter)
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
    case 4:
      first.style.display = 'none'
      second.style.display = 'block'
      third.style.display = 'none'
      counter--
      break
    default:
  }
  console.log(counter)
}
