const user1 = {
    userName: "aaa",
    password: "1234",
}

const user2 = {
    userName: "bbb",
    password: "1234",
}

const user3 = {
    userName: "ccc",
    password: "1234",
}

const users = [user1, user2, user3];
const userInfoString = users.map(user => `사용자명: ${user.userName} 비밀번호:${user.password}`);
const userComponents = users.map(user =>
    `
    <label>사용자이름</label>
    <div>${user.userName}</div>
        <label>비밀번호</label>
    <div>${user.password}</div>
    `
 ).join("");
 console.log(userComponents);

 const users2 = users.filter(user => user.userName !== "bbb");
 console.log(users2);


const users3 = users.map(user => {

    if(user.userName === "bbb"){    // userName 중 이름이 "bbb"인 user이 있다면

        return{

            ...user,    // 기존 user은 그대로 복사하고
            userName: "ddd",        // userName이 "bbb"인 user을 "ddd"로 변경
        }; 
    }
    // 그 외의 user는 변경없이 반환
    return user;        
})

// userName 중 이름이 "ccc"인 사람은 제외하고 출력 (메서드 체이닝)
.filter(user => user.userName !== "ccc");   
console.log(users3);

const nums = [1,2,3,4];
const nums2 = nums.map(n => {
    if(n % 2 === 0) {
        return n * 2;
    }
    return n;
});
console.log(nums2);     // [ 1, 4, 3, 8 ]


