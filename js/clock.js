window.onload = function(){
    clock();
}
setInterval(() => {
    clock();
}, 1000);

let notationMode = document.getElementById('ClockNotation');//時計の表記設定
let clockUpper = document.getElementById('main');//時計の上段
let clockNotationMode = "all";
notationMode.addEventListener('change', (e) => {
    if(notationMode.value == "all"){
        clockNotationMode = "all";
    }else if(notationMode.value == "hmsOnly"){
        clockNotationMode = "hmsOnly"
    }
});

function clock(){
    let jikan = new Date();
    let clock = document.getElementById('main');
    let cl2 = document.getElementById('second');
    let year = jikan.getFullYear();
    let month = jikan.getMonth();
    let date = jikan.getDate();
    let hours = jikan.getHours();
    let minutes = jikan.getMinutes();
    let seconds = jikan.getSeconds();
    if (month <= 9  ){month     = '0' + month;    }
    if (date <= 9   ){date      = '0' + date;     }
    if (hours <= 9  ){hours     = '0' + hours;    }
    if (minutes <= 9){minutes   = '0' + minutes   }
    if (seconds <= 9){seconds   = '0' + seconds;  }
    if (clockNotationMode == "all"){
        clock.innerHTML = `<h1>${year}:${month}:${date}</h1>` + "<br>" + `<h1>${hours}:${minutes}:${seconds}</h1>`;
    }else {
    clock.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
    }
}