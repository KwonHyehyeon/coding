

// 모달
const modalBtn = document.querySelector(".window__btn");
const modalClose = document.querySelector(".title-bar .close");
const modalCont = document.querySelector(".window__box");
modalBtn.addEventListener("click", () => {
    modalCont.classList.add("show");
    modalCont.classList.remove("hide");
});
modalClose.addEventListener("click", () => {
    modalCont.classList.add("hide");
});


//탭 메뉴
const tabBtn = document.querySelectorAll(".window__box .menu-bar > div")
const tabCont = document.querySelectorAll(".window__box .main > div")

//클릭하면 active붙여주기
tabBtn.forEach((element, index) => {
    //버튼 클릭하면
    element.addEventListener("click", (event) => { //클릭시 event는 창 맨 위로 올라가는 것
        event.preventDefault();                    //event는 클릭하면 위로 올라가는 것을 막아주기 위함
        
        
        //클래스 active를 모두 제거함
        //3개를 선택해서 엑티브 없애줘야함
        tabBtn.forEach(el => { //el을 li로 적어줘도 됨 목록안에 있는 이름들(alphabet 등등)이니깐
            el.classList.remove("active");  //class지워주는 것 : classList.remove
        });
        //내가 클릭한 버튼에 active를 추가함
        element.classList.add("active");

        //버튼을 클릭하면 모든 자식 박스 숨김
        tabCont.forEach(div => {
            div.style.display = "none";
        });
        //[i]클릭한 버튼과 [i]관련 박스를 보이게 함
        tabCont[index].style.display = "block";
    });
});