let btn = document.getElementById('demo')
let dis = document.getElementById('display')
let sel = document.querySelector('select')
// 一段时间内只执行一个任务
let num = 0

btn.onclick = () => {
  num++
  throttle(() => {
    dis.value = num;
    num = 0
  }, delay = sel.options[sel.selectedIndex].value)()
}

// function throttle(func, delay) {
//   let timer
//   return function () {
//     if (!timer) {
//       timer = setTimeout(() => {
//         func()
//         timer = null
//       }, delay)
//     }
//   }
// }

let flag = true
function throttle(func, delay) {
  return function () {
    if (flag) {
      setTimeout(() => {
        func.call(this)
        flag = true
      }, delay)
    }
    flag = false
  }
}