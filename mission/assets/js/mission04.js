 // 슬라이드
const sliderWrap = document.querySelector(".slider__wrap")
const sliderImg = document.querySelector(".slider__img")        //보여지는 영역
const sliderInner = document.querySelector(".slider__inner")    //움직이는 영역
const slider = document.querySelectorAll(".slider")             //각각 이미지
const sliderBtn = document.querySelector(".slider__btn");    //버튼
const sliderBtnPrev = document.querySelector(".prev");       //왼쪽버튼
const sliderBtnNext = document.querySelector(".next");       //오른쪽버튼
let currentIndex = 0;       //현재 이미지
let sliderCount = slider.length;//이미지 갯수
let sliderWidth = sliderImg.offsetWidth; //이미지 가로값

//이미지 움직이는 영역
function gotoSlider(num){
    sliderInner.style.transition = "all 400ms";
    sliderInner.style.transform = "translateX("+ -sliderWidth * num+"px)";
    //이걸 안 써주면 currentIndex이 계속 0이므로 계속안가고 한 번 가고 0돼서 멈춤
    currentIndex = num;
}
// gotoSlider();

//왼쪽 버튼 클릭했을 때
sliderBtnPrev.addEventListener("click", () => {
    //1, 4, 3, 2, 1, 0, 
    //currentIndex : prev눌렀을 때 가는 페이지 인덱스
    let prevIndex = (currentIndex+(sliderCount-1)) % sliderCount; //0, 4, 3, 2, 1, 0, 4...
    gotoSlider(prevIndex);
});
//오른쪽 버튼 클릭했을 때
sliderBtnNext.addEventListener("click", () => {
    let nextIndex = (currentIndex + 1) % sliderCount //5이미지갯수로 나누기
    gotoSlider(nextIndex);
});

 
//탭메뉴
// const Btn1 = document.querySelector(".tab_menu .tab-btn .btn1");
// const Btn2 = document.querySelector(".tab_menu .tab-btn .btn2");
// const Cont1 = document.querySelector(".tab_menu .tab-cont .con1");
// const Cont2 = document.querySelector(".tab_menu .tab-cont .con2");

// Btn1.addEventListener("click", () => {
//     Btn1.classList.add("active");
//     Btn2.classList.remove("active");
//     Cont1.style.display = "block";
//     Cont2.style.display = "none";
// });
        
// Btn2.addEventListener("click", () => {
//     Btn2.classList.add("active");
//     Btn1.classList.remove("active");
//     Cont2.style.display = "block";
//     Cont1.style.display = "none";
// });

// 탭 메뉴
var tabBtn = $(".tab-btn li");
var tabCont = $(".tab-cont ul");

//제이커리 순서 eq
tabCont.hide().eq(0).show();

tabBtn.click(function(event){
    event.preventDefault();
    // 누굴 클릭할지 모르니깐 target //this: 여러개의 버튼이 있을 때 어떤 대상을 클릭했는지 정확하게 알고 싶을 때 사용
    var target = $(this);
    // 타켓 번호 매기기
    var index = target.index();
    //alert(index);
    // 버튼을 클릭하면 엑티브가 사라지고
    tabBtn.removeClass("active");
    // 타겟(클릭한)에만 엑티브가 활성화됨
    target.addClass("active");
    tabCont.css("display","none");
    // 클릭하면 첫번째 박스, 두번째 박스가 나옴...index
    tabCont.eq(index).css("display","block");
});