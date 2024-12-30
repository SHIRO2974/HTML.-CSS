function fx1() {

    console.log("fx1 호출");
}
fx1();

function fx2(num1, num2) {

    console.log(num1 + num2);
}

function fx2(num1, num2, num3 = 0) {    // 파라미터에 디폴트값 = 0 을 주면 오버로딩처럼 사용 가능

    console.log(num1 + (num2 ?? 0)+ num3);  // ?? 0: 좌항에 값이 없다면 0 return
}
fx2(10, 20, 30);    // 60

const num1 = 20;
function fx3() {

return num1;
}
console.log(fx3()); // 20

function fx4() {

    console.log("fx4 호출");


    function fx5() {

        console.log ("fx5 호출");
    }
    fx5();
}
fx4();
// fx4 호출
// fx5 호출

const fx6 = fx4;
fx6();
// fx4 호출
// fx5 호출

function fx7() {
    console.log("fx7 호출");
}
function fx8() {
    console.log("fx8 호출");
}
function fx9() {
    console.log("fx9 호출");
}

const fxArray = [fx7, fx8, fx9];
console.log(fxArray);

for(let fx of fxArray) {

    fx();
}
// fx7 호출
// fx8 호출
// fx9 호출

/*      callback 함수
*/
function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function run(fx) {
    const result = fx(10, 20);
    console.log(result);
}
run(add);   // 30
run(sub);   // -10

/**
        화살표 함수
 */
function fx10(arg1, arg2) {

    return "리턴";
}
fx10(1,2);

const fx11 = (arg1, arg2) => {
    return "리턴";
}
fx11(3, 4);

const fx12 = arg1 => arg1 + 1;
fx12(10);

function run(fx) {
    fx();
}

run( ()=> console.log("test"));