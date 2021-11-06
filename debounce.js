let btn = document.getElementById('demo')
let dis = document.getElementById('display')
let sel = document.querySelector('select')

btn.oninput = debounce(() => { dis.value = btn.value }, 1000)

function debounce(func, delay) {
  // func: 业务代码,  delay:时延
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay = sel.options[sel.selectedIndex].value);
  }
}