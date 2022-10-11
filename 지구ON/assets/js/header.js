    // 내비게이션
    $(".header__nav > ul > li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".header__nav > ul > li").mouseout(function () {
        $(this).find(".submenu").stop().slideUp(200);
    });

    // 탭 메뉴
    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show();

    tabBtn.click(function (event) {
        event.preventDefault();
        var target = $(this);
        var index = target.index();
        //alert(index);
        tabBtn.removeClass("active");
        target.addClass("active");
        tabCont.css("display", "none");
        tabCont.eq(index).css("display", "block");
    });

    // 메뉴 버튼 (반응형)
    const btnHam = document.querySelector(".header__ham");
    const btnMenu = document.querySelector(".mobile__nav");
    const btnMenuList = btnMenu.querySelectorAll(".mobile__nav ul li a");

    btnHam.addEventListener("click", () => {
        btnHam.classList.toggle("active");
        btnMenu.classList.toggle("active");
        document.body.classList.toggle("fixed");
    });

    // 반응형에서 메뉴 버튼 누르는 즉시 메뉴창 닫히게 하기
    btnMenuList.forEach((list) => {
        list.addEventListener("click", () => {
            document.body.classList.remove("fixed");
            btnHam.classList.remove("active");
            btnMenu.classList.remove("active");
        });
    });