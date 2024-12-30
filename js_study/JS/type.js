var name = "이재현";
console.log(name);      // 이재현
console.log(typeof name);       // string

var age = 24;
console.log(age);
console.log(typeof age);

var address;
console.log(typeof address);

address = 10;
console.log(address);       //10
console.log(typeof address);        //number

address = "10";
console.log(address);       // 10
console.log(typeof address);        //string

address = null;
console.log(address);       // null
console.log(typeof address);    // object

address = {
        si: "부산시",
        gungu: "부산 금정구",
};      
console.log(address);       // { si: '부산시', gungu: '부산 금정구' }
console.log(typeof address);        // object

/**     
 *      // 자바 스크립트 type \\
 
 *      number (숫자 -정수, 실수)
 *      string (문자열)
 *      boolean (논리 -참, 거짓)
 *      object (객체)
 *      undefined (정해진 타입 X)
 *      NaN (Not a Number)
 */
