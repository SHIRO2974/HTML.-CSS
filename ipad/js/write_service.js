let boardInputDatas = {
    id: 0,
    title: "",
    content: "",
    writer: "",
};

function setInputsEvent() {
    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector(".main-article > textarea");
    const writerInput = document.querySelector(".main-article > input:nth-of-type(2)");
    titleInput.onkeyup = handleBoardInputOnChange;
    contentInput.onkeyup = handleBoardInputOnChange;
    writerInput.onkeyup = handleBoardInputOnChange;

    // 엔터 키를 눌렀을 때 저장되도록 이벤트 처리
    titleInput.addEventListener('keydown', handleEnterKeyPress);
    contentInput.addEventListener('keydown', handleEnterKeyPress);
    writerInput.addEventListener('keydown', handleEnterKeyPress);
}

function handleBoardInputOnChange(e) {

    boardInputDatas = {

        ...boardInputDatas,
        [e.target.name]: e.target.value,
    };
}

function setButtonEvent() {
    const submitButton = document.querySelector(".write-submit-button");
    submitButton.onclick = handleSubmitOnClick;
}

function handleSubmitOnClick() {
    saveBoard();
    clear();
}

function saveBoard() {

    let boardDatas = !!localStorage.getItem("boardDatas")
    ? JSON.parse(localStorage.getItem("boardDatas"))
    :[];

    if (boardDatas.length > 0) {

        boardInputDatas.id = boardDatas[boardDatas.length -1].id + 1;
    }

    boardDatas = [
        
        ...boardDatas,
        boardInputDatas,
    ]

    localStorage.setItem("boardDatas", JSON.stringify(boardDatas));
    alert("게시글 작성 완료.")
    location.href = "./list.html";
}

function clear() {

    const titleInput = document.querySelector(".main-article > input:nth-of-type(1)");
    const contentInput = document.querySelector("main-article > textarea");
    const writerInput = document.querySelector(".main-article > input:nth-of-type(2)");
    const inputs = [titleInput, contentInput, writerInput];
    inputs.forEach(input => input.value = "");

    boardInputDatas = {

        title: "",
        content: "",
        writer: "",
    };
}

// 엔터 키를 눌렀을 때 저장되도록 처리하는 함수
function handleEnterKeyPress(e) {

    if (e.key === "Enter") {

        e.preventDefault(); // 기본 엔터키 동작 (줄 바꿈)을 막음
        saveBoard();    // 저장 함수 호출
        clear();    // 입력 값 초기화
    }
}

setInputsEvent();
setButtonEvent();