console.log(1)
let promise = new Promise((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    resolve('下次一定')
    console.log(4)
  })
  // reject('下次不一定')
  // throw new Error('俺不懂')
})

promise.then(
  // undefined,
  result => { console.log(result) },
  result => { console.log(result.message) }
)
console.log(3)