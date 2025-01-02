const backButton = document.querySelector(".back-button")
backButton.onclick = () => {
    goBack();
}

function goBack() {
    console.log("확인");
    
    location.href = "./list.html";
}