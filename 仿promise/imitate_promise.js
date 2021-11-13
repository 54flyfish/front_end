class Commitment {
  static pending = '待定'
  static fufilled = '成功'
  static rejected = '拒绝'

  constructor(func) {
    this.status = Commitment.pending
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  resolve(result) {
    setTimeout(() => {
      if (this.status === Commitment.pending) {
        this.status = Commitment.fufilled
        this.result = result
        this.resolveCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === Commitment.pending) {
        this.status = Commitment.rejected
        this.result = result
        this.rejectCallbacks.forEach(callback => {
          callback(result)
        })
      }
    });
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => { }
    onRejected = typeof onRejected === 'function' ? onRejected : () => { }

    if (this.status === Commitment.pending) {
      this.resolveCallbacks.push(onFulfilled)
      this.rejectCallbacks.push(onRejected)
    }
    if (this.status === Commitment.fufilled) {
      setTimeout(() => {
        onFulfilled(this.result)
      })
    }
    if (this.status === Commitment.rejected) {
      setTimeout(() => {
        onRejected(this.result)
      })
    }
  }
}

console.log(1)
let commitment = new Commitment((resolve, reject) => {
  console.log(2)
  setTimeout(() => {
    console.log(commitment.status)
    resolve('这次一定')
    console.log(commitment.status)
    console.log(4)
  });

  // throw new Error('俺不懂')
})
commitment.then(
  // undefined,
  result => { console.log(result) },
  result => { console.log(result.message) }
)
console.log(3)