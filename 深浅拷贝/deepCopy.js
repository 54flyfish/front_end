let beforeObj = {
  name: 'xiaoli',
  sex: '女',
  area: {
    name: '商丘一高'
  },
  arr: [1, 2, 4, { nt: 'xiao' }],
  reg: /\w+/g
}

// 完整的递归方式实现
function deepCopy(obj) {
  let newObj = {}
  if (obj === null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (typeof obj !== 'object') return obj
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepCopy(obj[key])
    }
  }
  // Object.keys(obj).forEach(item => {
  //   if (typeof obj[item] === 'object') {
  //     newObj[item] = deepCopy(obj[item])
  //   } else {
  //     newObj[item] = obj[item]
  //   }
  // })
  return newObj
}
let afterObj = deepCopy(beforeObj)
beforeObj.area.name = 'gg'
console.log([beforeObj, afterObj])

// json.parse(json.stringfy(obj)) 亦可实现  有缺陷 不可以复制函数、正则表达式
// let afterObj = JSON.parse(JSON.stringify(beforeObj))
// beforeObj.area.name = 'gg'
// console.log([beforeObj, afterObj])