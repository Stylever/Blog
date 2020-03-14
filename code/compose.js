/**
 * 因此compose函数有一个限制，就是被compose的函数是单元的，即只有一个参数，如果不这样的话，就只能返回数组了。 因为在JS中参数其实就是一个类数组。
 */ 

function compose(...fns) {
  console.log('compose fns:', fns)
  return (...args) => {
    console.log('args:', args)
    return fns.reduceRight((acc, cur) => {
      console.log('reduceRight acc cur:', acc, cur)
      return cur(acc)
    }, ...args);
  }
}

function compose2(...fns) {
  return (...args) => fns.reduceRight((acc, cur) => cur(acc), ...args)
}

function a(msg) {
  console.log('a msg:', msg)
  return msg + "a";
}
function b(msg) {
  console.log('b msg:', msg)
  return msg + "b";
}
function c(msg, msg2) {
  console.log('c msg msg2:', msg, msg2)
  return msg + "c";
}

const f = compose(
  a,
  b,
  c
);
console.log(f("hello", "world"));