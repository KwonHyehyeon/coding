//#header .nav li ul.submenu {display:none}
    //선택자 {속성: 속성값}

    //$(".submenu").css("display","block");
    //선택자.메서드(속성,속성값)

    //첫번째 유형
    // $(".nav > ul > li").mouseover(function(){   //li에 마우스 오버했을 때
    //     $(this).find(".submenu").css("display","block");
    // });

    // $(".nav > ul > li").mouseout(function(){   //li에 마우스 아웃했을 때
    //     $(this).find(".submenu").css("display","none");
    // });

    //두번째 유형
    // $(".nav > ul > li").mouseover(function(){   //li에 마우스 오버했을 때
    //     $(".nav > ul > li").find(".submenu").css("display","block");
    // });

    // $(".nav > ul > li").mouseout(function(){   //li에 마우스 아웃했을 때
    //     $(".nav > ul > li").find(".submenu").css("display","none");
    // });

    // $(".nav > ul > li").mouseover(function(){
    //     $(this).find(".submenu").stop().show(500);
    // });

    // $(".nav > ul > li").mouseout(function(){
    //     $(this).find(".submenu").stop().hide(500);
    // });

    //서브 메뉴
    //첫번째 유형
    $(".nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });

    $(".nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

    //두번째 유형
    //$(".nav > ul > li").mouseover(function(){
    //    $(".nav > ul > li").find(".submenu").stop().slideDown(200);
    //});

    //$(".nav > ul > li").mouseout(function(){
    //    $(".nav > ul > li").find(".submenu").stop().slideUp(200);
    //});


    //이미지 슬라이드
    //이미지를 top으로 이미지의 height값 만큼 설정

    //$(".slideList").css("top","-300px");
    //$(".slideList").animate({"top":"-300px"},4000);

    //현재 이미지 = 0    -> top:  0;
    //두번째 이미지 = 1   -> top: -378px; 
    //세번째 이미지 = 2   -> top: -756px;

    var currentIndex = 0;       //현재 이미지를 변수에 저장

    setInterval(function () {
        if (currentIndex < 2) {
            currentIndex++
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * (-378) + "px";

        //console.log(slidePosition);
        $(".slideList").animate({ top: slidePosition }, 400);
    }, 3000);


    //탭메뉴
    var tabMenu = $(".notice");

    tabMenu.find("ul > li > ul").hide();
    //active만 붙은 것만 보여준다.
    tabMenu.find("ul > li.active > ul").show();

    //함수를 작동시키려면 tabList가 있어야됨
    function tabList(e) {
        //a태그 #기능 때문에 페이지 위로 올라가는데 그걸 막아줌 preventDefault()
        e.preventDefault();
        //target설정 this = a태그들
        var target = $(this);
        //a의 형제 태그인 ul들이 보이게 target(a).next(형제) //부모 li를 찾아서 active를 줌 //siblings형제 li를 선택해서 active라는 클래스를 지워줄것임. 그리고 ul을 찾아서 숨김
        target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    };
    //click에 함수를 넣어줬으니깐 tabList();:함수실행 이 들어간 것임 //focus랑 tablist를 넣어주면 뉴스 공지 부분에도 탭이 들어감
    tabMenu.find("ul > li > a").click(tabList).focus(tabList);

    //팝업
    $(".ad").click(function () {
        $(".layer_bg").css("display", "block");
    });
    $(".layer .close").click(function () {
        $(".layer_bg").css("display", "none");
    });
