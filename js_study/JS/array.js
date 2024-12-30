/**
        배열
 */
const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers)    

for(let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);
}

for(let num of numbers) {   // forEach 

    console.log(num);
}

numbers.forEach((num) => console.log(num)); // 람다식

// push: 배열의 끝에 값을 추가
numbers.push(10);   
console.log(numbers);

// 10   pop: 스택 구조, 배열의 마지막 요소를 제거하고 그 값을 반환
console.log(numbers.pop());     

// includes: 값을 포함하는지 확인 (java conntains)
console.log(numbers.includes(5));   // true 

// indexOf: 값의 위치 (index)
console.log(numbers.indexOf(5));   // 4

 // lastIndexOf: 뒤에서 부터 값의 위치 (index)
console.log(numbers.lastIndexOf(5));  // 4

// concat: 두 배열의 병합
console.log(numbers.concat([11,12,13,14,15]));   
console.log(numbers)    // 원본은 바뀌지 않음

const newNumbers = numbers.concat([11, 12, 13, 14, 15]);

console.log(newNumbers); 

// ...: 스프레드 연산: 배열이나 객체를 복사하거나 결합하는 데 사용
const newNumbers2 = [ ...newNumbers, 11, 12, 13, 14, 15];
console.log(newNumbers2);

// slice: slice(start, end) start부터 end까지 잘라냄 (end는 잘리지 않음)
// slice (end): end 인덱스부터 끝까지 잘라냄 
const newNumbers3 =  numbers.slice(0, 5);   
console.log(newNumbers3);   // [ 1, 2, 3, 4, 5 ]

const newNumbers4 = numbers.slice(0, numbers.indexOf(4))
.concat(numbers.slice(numbers.indexOf(4) + 1))
console.log(newNumbers4);

const newNumbers5 = numbers.splice(3,1);    // splice(3,1) // 인덱스 3부터 1개의 요소를 제거
console.log(newNumbers5)    // [ 4 ]
console.log(numbers);

const newNumbers6 = numbers.splice(4, 2, 11, 12);   // // 인덱스 4부터 2개를 지우고 11, 12를 추가
console.log(newNumbers6);   // [ 6, 7 ]
console.log(numbers);

numbers.splice(4, 0, 20, 21);   // 인덱스 4위치에 20과 21을 추가
console.log(numbers);

