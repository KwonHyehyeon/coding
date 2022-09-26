//세로 메뉴
$(".nav > ul > li").hover( //hover(function(){,function(){}}) 이렇게 한번에 쓸 수 있음
    //마우스 오버했을 때
    function(){
        $(this).find(".submenu").stop().slideDown();
        //마우스 떠났을 때
    },function(){
        $(this).find(".submenu").stop().slideUp();
});

//slideList > slideImg (1) eq(0)
//slideList > slideImg (2) eq(1)
//slideList > slideImg (3) eq(2)

//이미지 슬라이드 
//overflow:hidden과 같은 것
$(".slideList").children("div:gt(0)").hide();

var currentIndex = 0;
//var currentIndex = 1;
//var currentIndex = 2;

setInterval(function(){
    var next = (currentIndex + 1) % 3;
    $(".slideList").find("div").eq(currentIndex).fadeOut();
    $(".slideList").find("div").eq(next).fadeIn();
    
    console.log("currentIndex="+ currentIndex);
    console.log("next="+ next);
    //currentIndex = 0
    //next = 1
    
    currentIndex = next;
},3000);