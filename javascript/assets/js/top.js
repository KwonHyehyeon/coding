window.addEventListener("scroll", () => {
    //모두 같은 Y값인데 각 브라우저마다 호환이 될 수 있고 안될 수 있기 때문에 or연산자를 통해 다 가능하게끔! 
    let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop; 

    //01
    // if(scrollTop > 0){
    //     document.querySelector("#parallax__nav").classList.add("show");
    // } else {
    //     document.querySelector("parallax__nav").classList.remove("show")
    // }

    //02
    //(문서 전체 높이 - 브라우저 높이)
    if(scrollTop >= (document.body.scrollHeight-window.innerHeight-300)){
        document.querySelector("#javascript__top").classList.add("show");
    } else {
        document.querySelector("#javascript__top").classList.remove("show")
    }
    //Math.ceil() : 올림
    // document.querySelector("#parallax__info span").innerText = Math.ceil(scrollTop);

    //top 버튼
    document.querySelector("#javascript__top").addEventListener("click", ()=>{
        window.scrollTo({left:0, top: 0, behavior: "smooth"});
    });
});