
Function.prototype.myBind = function(ctx, ...args) {
  console.log('myBind funtion ctx:', ctx)
  console.log('myBind funtion this:', this)
  return (...innerArgs) => {
    console.log('myBind ctx:', ctx)
    console.log('this:', this)
    return this.call(ctx, ...args, ...innerArgs)
  }
};

// test
const a = {
  name: "name of a"
}
const b = {
  name: "name of b"
}
function test(...msg) {
  console.log(this.name)
  console.log(...msg)
}
const t = test.myBind(a, "hello")
console.log('t:', t)
t.myBind(b)
console.log('t:', t)
// t("world")

