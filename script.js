const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
    changeBground()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
    changeBground()
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

// Added changing colours on changeImage()

document.addEventListener("click", changeBground); 
let counter = 0;
const colours = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];

function changeBground() {
  document.body.style.background = colours[counter];
  counter = counter < colours.length -1 ? counter + 1 : 0;
}

function changeBground() {
    const colour = colours[Math.floor(Math.random() * colours.length)];
    document.body.style.background = colour;
  }