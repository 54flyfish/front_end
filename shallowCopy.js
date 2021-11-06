// 浅拷贝实现方式
// Object.assign()
// ...展开运算符(spread 用法)
// concat方法
// lodash clone方法

// 深拷贝方法
// $.extend
// json.parse(json.stringfy())
// 递归
// lodash deepClone
let beforeObj = {
  name: 'xiaoli',
  sex: '女',
  area: {
    name: '商丘一高'
  }
}


let afterObj = shallowCopy(beforeObj)
beforeObj.name = 'mm'
beforeObj.area.name = 'gg'

console.log([beforeObj, afterObj])



function shallowCopy(obj) {
  let newObj = {}
  Object.keys(obj).forEach(item => {
    newObj[item] = obj[item]
  })
  return newObj
}