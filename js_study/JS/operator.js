/**
        연산자

        산술 연산자
        +, -, *, /, %, **(제곱)
 */
console.log(5 ** 2);    // 25

/**
        증감 연산자
        ++, --

        비교 연산자
        <, <=, >, =>, (==, !=)
        javascript 의 특징: 기본적으로 변수의 타입이 정해지지 않음. 
 */
console.log("===== 비교 연산 =====")
console.log(1 == 1);    // true

console.log(1 == "1");  // true     타입을 검사하지 않고 값이 같으면 true
console.log(1 === "1"); // false    타입까지 검사하고 값이 같으면 true

console.log(1 != "1"); // false    타입을 검사하지 않고 값이 같으면 false
console.log(1 !== "2"); // true    타입까지 검사하고 값이 같으면 false

/**
        논리 연산자
        &&, ||

        단축 평가

        논리 자료값 || anything
        논리 자료값 ===(true) => true;
        논리 자료값 ===(false) => anything

        논리 자료값 && anything
        논리 자료값 ===(true) => anything
        논리 자료값 ===(false) => false

        null 병합 연산
        anything ?? anything
        좌항 === null || 좌항 === undefined => 우항 (return)
        좌항 !== null || 좌항 !== undefined => 좌항 (return)

 */
console.log("===== || 연산 =====")
console.log(1 === 1 || "이재현");   // true     값이 true 라면 true
console.log(1 !== 1 || "이재현");   // 이재현    값이 false 라면 anything

console.log("===== && 연산 =====")
console.log(1 === 1 && "이재현");   // 이재현   값이 true 라면 anything
console.log(1 !== 1 && "이재현");   // false    값이 false 라면 false

console.log("===== null 연산 =====")
console.log(null ?? "이재현");  // 이재현   null 이라면 우항 return
console.log("아무개" ?? "이재현");  // 아무개   좌항에 값이 있다면 좌항 return

/**
        Not 연산
        !, !! 
 */
console.log("===== Not 연산 =====")
console.log(!"");   // true
console.log(!0);    // true
console.log(!null); // true
console.log(!undefined);    // true

console.log(![]);    // false   배열은내부에 값이 없더라도 주소는 존재하기 때문에 true
console.log(![1,2,3,4,5]);    // false  
console.log(typeof []); // object
console.log(![].length) // true 배열이 비어있다는 의미

var name = "";

if (!name) {

    console.log("이름이 비었습니다.")

}   // 이름이 비었습니다.

var name = "이재현";
if (!!name) {

    console.log("이름이 비어있지 않습니다.");

}   // 이름이 비어있지 않습니다.



