const expandButton = document.querySelector('header button') // de knop
expandButton.addEventListener('click', expand) // als je klikt word het event expand aangeroepen

function expand () { //de functie om te expenden
  document.body.classList.toggle('expand')
}
