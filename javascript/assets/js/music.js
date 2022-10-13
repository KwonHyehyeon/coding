const allMusic = [
    {
        name : "1. Secrets",
        artist : "RYYZN",
        img : "music_img1",
        audio: "music_audio01"
    },
    {
        name : "2. Some Things Don't Change",
        artist : "Dylan Emmet",
        img : "music_img2",
        audio: "music_audio02"
    },
    {
        name : "3. Dumb",
        artist : "Dylan Emmet",
        img : "music_img3",
        audio: "music_audio03"
    },
    {
        name : "4. Passionate Affai",
        artist : "RYYZN",
        img : "music_img4",
        audio: "music_audio04"
    },
    {
        name : "5. Leave Me Again",
        artist : "Niwel",
        img : "music_img5",
        audio: "music_audio05"
    },
    {
        name : "6. Reality",
        artist : "Niwel",
        img : "music_img6",
        audio: "music_audio06"
    },
    {
        name : "7. Be The One",
        artist : "Vendredi",
        img : "music_img7",
        audio: "music_audio07"
    },
    {
        name : "8. Back To You",
        artist : "SKANDR",
        img : "music_img8",
        audio: "music_audio08"
    },
    {
        name : "9. Thinking About You",
        artist : "Rival X Cadmium",
        img : "music_img9",
        audio: "music_audio09"
    },
    {
        name : "10. People Say",
        artist : "Dyalla Swain",
        img : "music_img10",
        audio: "music_audio10"
    },
]

const musicWrap = document.querySelector(".music__wrap");
const musicView = musicWrap.querySelector(".music__view .img img"); //musicWrap안에 있는 거니깐 document대신!
const musicName = musicWrap.querySelector(".music__view .title h3");
const musicArtist = musicWrap.querySelector(".music__view .title p");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress"); //진행 버튼 클릭에 사용
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");
const musicRepeat = musicWrap.querySelector("#control-repeat");
const musicListBtn = musicWrap.querySelector("#control-list");
const musicFooter = musicWrap.querySelector(".music__footer");
const musicList = musicWrap.querySelector(".music__list");
const musicListLi = musicWrap.querySelector(".music__list .list");
const musicListUl = musicWrap.querySelector(".music__list ul");
const musicListClose = musicWrap.querySelector("#music__list__close");

let musicIndex = 1; //현재 음악 인덱스

// 음악 재생
function loadMusic(num){
    musicName.innerText = allMusic[num-1].name;                     //뮤직 이름 로드
    musicArtist.innerText = allMusic[num-1].artist;                 //뮤직 아티스트 로드
    musicView.src = `../assets/img/${allMusic[num-1].img}.png`;     //뮤직 이미지 로드
    musicView.alt = allMusic[num-1].name;                           //뮤직 이미지 alt 로드
    musicAudio.src = `../assets/audio/${allMusic[num-1].audio}.mp3` //뮤직 로드
}

// 재생 버튼
function playMusic() {
    musicWrap.classList.add("paused");
    musicPlay.setAttribute('title', '정지');
    musicPlay.setAttribute('class', 'stop');
    musicAudio.play();
};

// 정지 버튼
function pauseMusic(){
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute('title', '재생');
    musicPlay.setAttribute('class', 'play');
    musicAudio.pause();
};

// 이전곡 듣기
function prevMusic() {
    // musicIndex --
    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;
    loadMusic(musicIndex);
    playMusic();
    playListMusic();
};

// 다음곡 듣기
function nextMusic() {
    // musicIndex ++
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;
    loadMusic(musicIndex);
    playMusic();
    // 다음곡 들을 때는 재생중 나와있어야 됨
    playListMusic();
}

// window.addEventListener("load", () => {
//     loadMusic(musicIndex);
// });

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    // console.log(e)

    const currentTime = e.target.currentTime;           //오디오의 현재 재생되는 시간
    const duration = e.target.duration;                 //오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100;   //전체 길이에서 현재 진행되는 시간을 백분위로 나눔

    musicProgressBar.style.width = `${progressWidth}%`; 

    // 전체 시간  //loadeddata오디오 이벤트 : 로드가 다 되었을 때 함수 실행
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        //콘솔로그에서 나온 전체(만 칠천 몇초...) 시간을 분단위로 쪼개준것
        let totalMin = Math.floor(audioDuration / 60); 
        let totalSec = Math.floor(audioDuration % 60); //몫:분 나머지 : 초 => 남은 초를 저장
        if(totalSec < 10) totalSec = `0${totalSec}`;   //초가 한 자릿수일 때 앞에 0을 붙여 십의 자릿수로 만들어줌 1,2,3..=>01,02,03...
        musicProgressDuration.innerText = `${totalMin}:${totalSec}` //완성된 시간 문자열을 출력 (노래길이)
    })
    //진행시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
});

// 진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    //화살표 함수에서는 this를 못씀
    let progressWidth = musicProgress.clientWidth;  //진행바 전체 길이
    // 클릭되었을 때 progress처음값부터 클릭시 위치값 가져오기
    let clickedOffsetx = e.offsetX;   //진행바 기준으로 측정되는 X좌표
    let songDuration = musicAudio.duration; //오디오 전체 길이

    // 클릭된 오프셋값에 전체바 값을 나누면
    musicAudio.currentTime = (clickedOffsetx / progressWidth) * songDuration;   //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
});

// 반복 버튼 클릭
musicRepeat.addEventListener("click", () => {
    // 속성값 가져오기getAttribute
    let getAttr = musicRepeat.getAttribute("class");

    // alert(getAttr);
    // switch문은 break;안걸어주면 무한 반복되므로 걸어주기
    switch(getAttr){
        case "repeat" :
            musicRepeat.setAttribute("class", "repeat_one");
            musicRepeat.setAttribute("title", "한곡 반복");
        break;
        case "repeat_one" :
            musicRepeat.setAttribute("class", "shuffle");
            musicRepeat.setAttribute("title", "랜덤 반복");
        break;
        case "shuffle" :
            musicRepeat.setAttribute("class", "repeat");
            musicRepeat.setAttribute("title", "전체 반복");
        break;
    }
});

// 오디오가 끝나면
musicAudio.addEventListener("ended", () => {
    //class인 .repeat를 가져오는 것
    let getAttr = musicRepeat.getAttribute("class");

    switch(getAttr){
        //repeat나오면
        case "repeat" :
            //다음곡재생
            nextMusic();
        break;
        //repeat_one이 나오면
        case "repeat_one" :
            playMusic();
        break;
        //shuffle이 나오면
        case "shuffle" :
            //음악갯수만큼 랜덤으로 나와야함 random메서드로 무작위 // allMusic.length + 1 을 해야 반복
            let randomIndex = Math.floor(Math.random() * allMusic.length + 1);   //랜덤 인덱스 생성

            //while문 : 조건이 안맞으면 아예 실행을 안함
            //do : 실행하고 조건을 보고 도 실행할지 안할지
            do {
                randomIndex = Math.floor(Math.random() * allMusic.length + 1);
                // 음악인덱스랑 랜덤인덱스랑 같으면 똑같은 곡 또 듣는거니깐, 
            } while ( musicIndex == randomIndex)
            musicIndex = randomIndex;   //현재 인덱스를 랜덤 인덱스로 변경
            loadMusic(musicIndex);      //랜덤 인덱스가 반영된 현재 인덱스 값으로 음악을 다시 로드
            playMusic();                //로드한 음악을 재생
        break;
    }
    playListMusic();    //재생목록 업데이트
});

// 플레이 버튼
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   //음악이 재생중
    isMusicPaused ? pauseMusic() : playMusic();
})

// 이전곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
})

// 다음곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
})
// 뮤직 리스트 버튼
musicListBtn.addEventListener("click", ()=>{
    musicList.classList.add("show");
});


// 뮤직 리스트 구현하기
for(let i=0; i<allMusic.length; i++){
    let li = `
        <li data-index="${i+1}">
            <strong>${allMusic[i].name}</strong>
            <em>${allMusic[i].artist}</em>
            <audio class="${allMusic[i].audio}" src="../assets/audio/${allMusic[i].audio}.mp3"></audio>
            <span class="audio-duration" id="${allMusic[i].audio}">재생시간</span>
        </li>
    `;

    //로딩을 한 번에 넣어줌
    //musicListUl.innerHTML += li;
    // css의 before, after랑 비슷함 //이렇게 넣어주면 forEach문 안써도 됨 //로딩된다음에 사이에 넣어주는 것
    musicListUl.insertAdjacentHTML("beforeend", li)

    // 리스트에 음악 시간 불러오기
    let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`); //리스트에서 시간을 표시한 선택자를 가지고 오슨 것
    let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`);        //리스트에서 오디오를 가져옴
    // 로드가 됐을 때
    liAudio.addEventListener("loadeddata",() => {
        let audioDuration = liAudio.duration;                                       //오디오 전체 길이
        let totalMin = Math.floor(audioDuration / 60);                              //오디오 전체 길이를 분 단위로 쪼갬
        let totalSec = Math.floor(audioDuration % 60);                              //초 계산

        if(totalSec < 10) totalSec = `0${totalSec}`;                                //앞 자리에 0 추가
        liAudioDuration.innerText = `${totalMin}:${totalSec}`;                      //문자열 출력
        liAudioDuration.setAttribute("data-duration", `${totalMin}:${totalSec}`);   //속성에 오디오 길이 기록
    });
}
// 뮤직 리스트를 클릭하면 열리게 하기
musicListBtn.addEventListener("click", () => {
    musicFooter.classList.add("show"); 
})

// 닫기 버튼을 클릭하면 닫히게 하기
musicListClose.addEventListener("click", () => {
    musicFooter.classList.remove("show"); 
})


// 뮤직 리스트를 클릭하면 재생시켜주기
function playListMusic(){
    const musicListAll = musicListUl.querySelectorAll("li");    //뮤직 리스트 목록
    for(let i=0; i<musicListAll.length; i++){
        let audioTag = musicListAll[i].querySelector(".audio-duration");

        if(musicListAll[i].classList.contains("playing")){  
            musicListAll[i].classList.remove("playing");                //클래스가 존재하면 삭제
            let adDuration = audioTag.getAttribute("data-duration");    //오디오 길이 값 가져오기
            audioTag.innerText = adDuration;                            //오디오 길이 값 출력
        }
        // play되는거에 색상 표시
        if(musicListAll[i].getAttribute("data-index") == musicIndex){   //현재 뮤직인덱스랑 리스트 인덱스 값이 같으면
            musicListAll[i].classList.add("playing");   //클래스 playing 추가
            audioTag.innerText = "재생중";      //재생중일 경우 재생중 멘트 추가
        }
        //클릭했다는 함수를 실행 시켜줄것임
        //클릭한 것의 값을 넘겨주는 것 this
        musicListAll[i].setAttribute("onclick", "clicked(this)");
    }
}
playListMusic();

// 뮤직 리스트를 클릭하면...
function clicked(el){
    let getLiIndex = el.getAttribute("data-index"); //클릭한 리스트의 인덱스 값을 저장
    //musicIndex값으로 실행되고 있기 때문에
    musicIndex = getLiIndex;    //클릭한 인덱스 값을 뮤직 인데스에 저장
    loadMusic(musicIndex);      //해당 인덱스 뮤직 로드
    playMusic();                //음악 재생
    playListMusic();            //음악 리스트 없뎃
}

// 볼륨 조절
const volumeBtn = document.querySelector(".volumeOn > img");
const volumeBar = document.querySelector(".volumeBar");
const volumeBarSize = document.querySelector(".volumeSize");

// 볼륨 조절 자바스크립트
musicAudio.volume = 0.3;
volumeBar.addEventListener("click", (e)=>{
    let volumeBarWidth = volumeBar.clientWidth;     // 볼륨바 전체 길이
    let clickedOffsetX = e.offsetX;                 // 볼륨바 기준으로 측정되는 클릭된 부분의 X좌표
    let Volume = musicAudio.volume;

    musicAudio.volume = (clickedOffsetX / volumeBarWidth); //클릭 부분이 전체에서 차지하는 비율을 백분율로 표시
    if(musicAudio.volume == 0){
        volumeBtn.classList.add("mute");
        volumeBtn.setAttribute("title", "음소거 됨");
    } else {
        volumeBtn.classList.remove("mute");
        volumeBtn.setAttribute("title", "음량 조절");
    }
});
// 볼륨이 바뀌면 볼륨바의 너비를 바꾸기
musicAudio.addEventListener("volumechange", e =>{
    const currentVolume = e.target.volume;
    let volumeBarWidth = currentVolume * 100;

    volumeBarSize.style.width = `${volumeBarWidth}%`;
});


window.addEventListener("load", () => {
    loadMusic(musicIndex);  //음악 재생
    playListMusic();        //리스트 초기화
});


