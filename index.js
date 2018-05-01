/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

// const range = Math.floor(Math.random()*1000)

function delayedFadeOut(div, range) {
  setTimeout( () => {
    fadeOut(div)
  }, range + Math.floor(Math.random()*100))
  // fadeOut(div)
}

function delayedFadeIn(div, range) {
  //fade in needs to wait for the others to fade out
  setTimeout( () => {
    fadeIn(div)
  }, Math.floor(Math.random() * 1000))
}

function fadeAllOut(el, group) {
  // Your solution here
  group.forEach(div => {
    if (div === el) {
      delayedFadeOut(div, 200)
    } else {
      delayedFadeOut(div, 0)
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div)
  })
}
