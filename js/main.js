
let designMode = document.getElementById('designMode');
designMode.addEventListener('change', (e) => {
    if(designMode.value == "light"){
        light();
    }else if(designMode.value == "dark"){
        dark();
    }
});


// 秒ごとに時計を更新
setInterval(() => {
    clock();
}, 1000);

let clockUpper = document.getElementById('main'); // 時計の上段
const notationSelect = document.getElementById('ClockNotation'); // 時計の表記設定セレクトボックス

// 初期状態は'all'（上書きされる場合もある）
if (notationSelect) {
    // クリック時のイベントリスナーを登録
    notationSelect.addEventListener('change', () => {
        if (notationSelect.value === "all") {
            CNAll();
        } else if (notationSelect.value === "hmsOnly") {
            CNhms();
        }
    });
}

// クッキーの状態をもとにセレクトボックスと表示を更新
window.addEventListener('DOMContentLoaded', function() {
    const ClockCookies = document.cookie;
    const array = ClockCookies.split(';');
    let ClockResult = array.findIndex(cookie => cookie.trim().startsWith('CNO=all'));
    let ClockSubResult = array.findIndex(cookie => cookie.trim().startsWith('CNO=hms'));
    let result = array.findIndex(cookie => cookie.trim().startsWith('Theme=light'));
    let subResult = array.findIndex(cookie => cookie.trim().startsWith('Theme=dark'));
    if (notationSelect) {
        if (ClockResult > -1) {
            notationSelect.value = "all";
            CNAll();
        } else if (ClockSubResult > -1) {
            notationSelect.value = "hmsOnly";
            CNhms();
        }
    }
    if ( result > -1){
        designMode.value = "light";
        light();
    }else if ( subResult > -1){
        designMode.value = "dark";
        dark();
    }
    clock();
});

// クロックの書き換え（表示）
function clock() {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1; // 0-11なので+1
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 2桁にする
    if (month <= 9) { month = '0' + month; }
    if (date <= 9) { date = '0' + date; }
    if (hours <= 9) { hours = '0' + hours; }
    if (minutes <= 9) { minutes = '0' + minutes; }
    if (seconds <= 9) { seconds = '0' + seconds; }

    // 表示部分を取得
    const clockDiv = document.getElementById('main');
    // セレクトボックスからモード取得
    const mode = document.getElementById('ClockNotation')?.value || "all";

    if (clockDiv) {
        if (mode == "all") {
            clockDiv.innerHTML = `<h1>${year}:${month}:${date}</h1><br><h1>${hours}:${minutes}:${seconds}</h1>`;
        } else {
            clockDiv.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`;
        }
    }
}

// クッキー設定関数（全表示）
function CNAll() {
    document.cookie = 'CNO=all';
    if (document.getElementById('ClockNotation')) {
        document.getElementById('ClockNotation').value = "all";
    }
    clock();
}

// クッキー設定関数（時間のみ表示）
function CNhms() {
    document.cookie = 'CNO=hms';
    if (document.getElementById('ClockNotation')) {
        document.getElementById('ClockNotation').value = "hmsOnly";
    }
    clock();
}
function light(){
    document.cookie = 'Theme=light';
    document.documentElement.style.setProperty('--default-black', 'black');
    document.documentElement.style.setProperty('--default-white', 'white');
}
function dark(){
    document.cookie = 'Theme=dark';
    document.documentElement.style.setProperty('--default-black', 'white');
    document.documentElement.style.setProperty('--default-white', 'black');
}

document.querySelector('.toggleSettingVisible').addEventListener('click', (e) => {
    document.querySelector('.setting').classList.toggle('settingVisible');
    document.querySelector('.toggleSettingPart1').classList.toggle('toggleSettingVisible-Rotate1');
    document.querySelector('.toggleSettingPart2').classList.toggle('toggleSettingVisible-Rotate2');
});

document.querySelector('.toggleHeaderVisible').addEventListener('click', (e)=>{
    document.querySelector('.header').classList.toggle('headerInvisible');
    document.querySelector('.toggleHeaderVisible').classList.toggle('toggleHeaderClicked');
})