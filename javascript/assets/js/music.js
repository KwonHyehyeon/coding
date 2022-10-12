const allMusic = [
    {
        name : "Secrets",
        artist : "RYYZN",
        img : "music_img1",
        audio: "music_audio01"
    },
    {
        name : "Some Things Don't Change",
        artist : "Dylan Emmet",
        img : "music_img2",
        audio: "music_audio02"
    },
    {
        name : "Dumb",
        artist : "Dylan Emmet",
        img : "music_img3",
        audio: "music_audio03"
    },
    {
        name : "Passionate Affai",
        artist : "RYYZN",
        img : "music_img4",
        audio: "music_audio04"
    },
    {
        name : "Leave Me Again",
        artist : "Niwel",
        img : "music_img5",
        audio: "music_audio05"
    },
    {
        name : "Reality",
        artist : "Niwel",
        img : "music_img6",
        audio: "music_audio06"
    },
    {
        name : "Be The One",
        artist : "Vendredi",
        img : "music_img7",
        audio: "music_audio07"
    },
    {
        name : "Back To You",
        artist : "SKANDR",
        img : "music_img8",
        audio: "music_audio08"
    },
    {
        name : "Thinking About You",
        artist : "Rival X Cadmium",
        img : "music_img9",
        audio: "music_audio09"
    },
    {
        name : "People Say",
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
const musicList = musicWrap.querySelector(".music__list");
const musicListUl = musicWrap.querySelector(".music__list ul");

let musicIndex = 1;

// 음악 재생
function loadMusic(num){
    musicName.innerText = allMusic[num-1].name;
    musicArtist.innerText = allMusic[num-1].artist;
    musicView.src = `../assets/img/${allMusic[num-1].img}.png`;
    musicView.alt = allMusic[num-1].name;
    musicAudio.src = `../assets/audio/${allMusic[num-1].audio}.mp3`
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
};

// 다음곡 듣기
function nextMusic() {
    // musicIndex ++
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;
    loadMusic(musicIndex);
    playMusic();
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
});

// 뮤직 리스트 버튼
musicListBtn.addEventListener("click", ()=>{
    musicList.classList.add("show");
});


// 뮤직 리스트 구현하기
for(let i=0; i<allMusic.length; i++){
    let li = `
        <li>
            <strong>${allMusic[i].name}</strong>
            <em>${allMusic[i].artist}</em>
            <span>재생시간</span>
        </li>
    `;

    musicListUl.innerHTML += li;
}


// 플레이 버튼
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused");   // 음악이 재생중
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

window.addEventListener("load", () => {
    loadMusic(musicIndex);
})
// 버튼 바꿔주기
// const btnPlay = document.querySelector("#control-play");
// const btnStop = document.querySelector("#control-stop");

// btnStop.style.display = "none";

// btnPlay.addEventListener("click", () => {
//     playMusic();
//     btnStop.style.display = "block";
//     btnPlay.style.display = "none";
// });

// btnStop.addEventListener("click", () => {
//     pauseMusic();
//     btnStop.style.display = "none";
//     btnPlay.style.display = "block";
// });