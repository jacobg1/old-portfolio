var counter = 2
var first = document.getElementById('projectsContainerOne')
var second = document.getElementById('projectsContainerTwo')
var third = document.getElementById('projectsContainerThree')
var fourth = document.getElementById('projectsContainerFour')

second.style.display = 'none'
third.style.display = 'none'
fourth.style.display = 'none'

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
    case 4:
      counter++
      first.style.display = 'none'
      second.style.display = 'none'
      third.style.display = 'none'
      fourth.style.display = 'block'
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
    case 4:
      first.style.display = 'none'
      second.style.display = 'block'
      third.style.display = 'none'
      counter--
      break
    case 5:
      first.style.display = 'none'
      second.style.display = 'none'
      fourth.style.display = 'none'
      third.style.display = 'block'
      counter--
      break
    default:
  }
}
