/*
    객체
*/
const obj = {
    
    name: "이재현",
    age: 24,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

obj.print();    // 이름: 이재현, 나이: 24

const obj2 = {

    name: "이재현",
    age: 24,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

// JSON.stringify:  JavaScript 객체를 JSON 형식의 문자열로 변환하는 데 사용
console.log(obj === obj2);  // false    주소 비교
console.log(JSON.stringify(obj) === JSON.stringify(obj2))   // true 문자열을 비교 
console.log(typeof JSON.stringify(obj));    // string

/*  
        object -> Json JSON.stringif(object)
        Json -> object JSON.parse(json 문자열)
*/ 

const user = {
    userName: "",
    password: "",
    name: "",
    eamil: "",
    hobby: ["축구", "농구"],
    address: {
        si: "부산시",
        gungu: "부산 금정구"
    },
    printUserInfo: () => console.log("사용자 정보 출력"),   // Json 변환시 함수는 변환 할 수 없다
}

user.userName = "아무개";
user.password = 1234;
user.name = "이재현"
user.eamil = "sadas213@sdsdf.com"

const userJson = JSON.stringify(user);
console.log(user);    
console.log(userJson);  
// {"userName":"아무개","password":1234,"name":"이재현","eamil":"sadas213@sdsdf.com","hobby":["축구","농구"],"address":{"si":"부산시","gungu":"부산 금정구"}}

// JSON.parse: JSON 형식의 문자열을 JavaScript 객체로 변환하는 데 사용
const convertUSer = JSON.parse(userJson);
console.log(convertUSer);  // 아무개

const student = {
    name: "이재현",
    age: 24,
    address: "부산시 금정구",
}

const key = "age";
const value = 25;
const student2 = {
    ...student,
    [key]: value,
}
console.log(student2);  // { name: '이재현', age: 25, address: '부산시 금정구' }
