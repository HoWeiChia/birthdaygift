const closeFinal = 
document.getElementById("close-final");

const musicBtn = 
document.getElementById("music-btn");

const bgm = 
document.getElementById("bgm");

const openLetter = document.getElementById("open-letter");
const closeLetter = document.getElementById("close-letter");
const letterModal = document.getElementById("letter-modal");

const birthdayText = 
document.getElementById("birthday-text");

openLetter.addEventListener("click",function(){
    letterModal.style.display = "flex";
    setTimeout(function(){
        typeLetter();
    },1000);
});

closeLetter.addEventListener("click", function(){
    letterModal.style.display = "none";
});

const loginBtn = document.getElementById("login-btn");

const loginScreen = 
document.getElementById("login-screen");

const welcomeScreen = 
document.getElementById("welcome-screen");

const mainContent = 
document.getElementById("main-content");

const heartContainer = 
document.getElementById("heart-container");
const btn = document.getElementById("surprise-btn");
const message = document.getElementById("surprise-message");

btn.addEventListener("click", function(){
    message.style.display = "block";
    setTimeout(function(){
        message.classList.add("show");
    },10);

    message.scrollIntoView({
        behavior:"smooth"
    });
    
    for(let i = 0;i < 20; i++){
        setTimeout(function(){
            createHeart();
        }, i * 150);
    }
});

function createHeart(){
    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "💜",
        "💙",
        "🩵"
    ];

    heart.innerHTML = 
    hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = 
    Math.random() * 100 + "%";

    const size = 
    Math.random() * 35 + 20;

    heart.style.fontSize = 
    size + "px";

    const duration = 
    Math.random() * 3 + 3;

    heart.style.animationDuration = 
    duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    }, duration * 1000);
}

const passwordInput = 
document.getElementById("password-input");

loginBtn.addEventListener("click", function(){

    if(passwordInput.value === "1524"){
        
        loginScreen.classList.add("fade-out");

        setTimeout(function(){
            loginScreen.style.display = "none";

            welcomeScreen.style.display = "flex"
        },1000);

        setTimeout(function(){
            welcomeScreen.style.display = "none";

            mainContent.style.display = "block";

            mainContent.classList.add("fade-in");
            
            startSlideshow();
        },4000);
        
    }
    else{

        alert("密碼錯誤");
    }

});

const photos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
    "images/19.jpg",
    "images/20.jpg"
];

const memories = [
    
    "第一次早餐約會",
    "倒影照",
    "去基隆的時候",
    "烘爐地ㄎ",
    "一起參加婚禮",
    "信義區聖誕樹",
    "忘記是去哪裡了",
    "冬天的我們",
    "男友視角💜",
    "蘊泉莊",
    "阿里山一年快樂!💜",
    "烏來老街",
    "耶誕城的我們",
    "去年的今天💜",
    "八德夜市",
    "日本蝦餅",
    "日本鼻涕怪 可愛💜",
    "和服妹 好正 好愛💜",
    "好像在拍婚紗哦~",
    "不知道在幹嘛的我們"

];

let currentPhoto = 0;
function startSlideshow(){
    const slideshow = 
    document.getElementById("slideshow");

    const memoryText =
    document.getElementById("memory-text");
    
    memoryText.textContent = memories[0];

    setInterval(function(){
        slideshow.classList.add("fade-photo");
        setTimeout(function(){
            currentPhoto++;
            if(currentPhoto >= photos.length){
                currentPhoto = 0;
            }

            slideshow.src =
            photos[currentPhoto];

            memoryText.textContent = 
            memories[currentPhoto];

            slideshow.classList.remove("fade-photo");
        },500);
    },5000);
}

const letterText = `
老婆:

謝謝妳出現在我的生命中，
我不是一個浪漫的人，
也不太會說話，
常常說錯話，
讓妳生氣不開心，
最近常常讓妳不開心，
對不起，
我喜歡跟妳約會，
但我總是臉臭愛生氣這些我都清楚，
我也在想如何改善，
也謝謝妳總是包容這樣的我，
希望餘生都是妳陪伴我，
也由我陪伴妳，
我愛妳!
生日快樂💜
P.S.希望你會喜歡這個禮物!
`;

function typeLetter(){
    const content = 
    document.getElementById("letter-content");

    content.textContent = "";

    let index = 0;

    const timer = setInterval(function(){
        content.textContent +=
        letterText.charAt(index);

        index++;

        if(index >= letterText.length){
            clearInterval(timer);
        }
    },80);
}

musicBtn.addEventListener("click",function(){
    if(bgm.paused){
        bgm.play();

        musicBtn.innerText =
        "暫停⏸️";

        musicBtn.style.background = 
        '#8b5cf6';
    }

    else{
        bgm.pause();
        
        musicBtn.innerText = 
        "播放🎵"

        musicBtn.style.background = 
        '#c084fc';
    }
});

const finalGift = 
document.getElementById("final-gift");

const finalMessage = 
document.getElementById("final-message");

finalGift.addEventListener("click",function(){
    finalMessage.style.display = "flex";
    startBirthdayTypewriter();
});

closeFinal.addEventListener("click",function(){
    finalMessage.style.display = "none";
});

function startBirthdayTypewriter(){
    const text = "生日快樂🎂";
    let i = 0;
    birthdayText.textContent ="";
    function type(){
        if(i < text.length){
            birthdayText.textContent += text.charAt(i);
            i++;
            setTimeout(type,180);
        }
    }
    type();
}