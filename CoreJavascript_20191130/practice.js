// var a = 1;
// function outer() {
//   console.log(a); // 첫번째, outer context
//   function inner() {
//     console.log(a); // 두번째, inner context -> 'Undefined' 가 출력된다. inner environmentRecord의 var a 호이스팅에 의해서
//     var a = 3;
//   }
//   inner();

//   console.log(a); // 세번째, outer context
// }
// outer();
// console.log(a); // 네번째, global context




// var arr = [1,2,3,4,5];
//     var entries = [];
//     arr.forEach(function(v, i) {
//       entries.push([i, v, this[i]]);
//     }, [10, 20, 30, 40, 50]);

//     console.log(entries);





// this.a = 1;
// var arr = [1,2,3,4,5];
// var obj = {
//   vals: [1,2,3],
//   method: function(v, i) {
//     if(this.vals) {
//       console.log(this.vals, v, i);
//     } else {
//       console.log('None');
//     }
//   }
// };
// arr.forEach(function(e) {
//   console.log(this);
// }, obj);
// arr.forEach(() => {
//   console.log(this);  //전역 컨텍스트가 찍힘
// }, obj);
// arr.forEach(obj.method, obj);





// function a() {
//   var localA = 1;
//   var localB = 2;
//   var localC = 3;
//   return {
//     get a() { return localA;},
//     set a(v) { localA = v;},
//     get b() { return localB + localC;},
//     set b(v) { throw Error('read only'); }
//   }
// }
// var obj = a();
// console.log(obj.a);
// obj.a = 2;
// console.log(obj.a);
// obj.b = 2;


