document.querySelector('.toggleSettingVisible').addEventListener('click', (e) => {
    document.querySelector('.setting').classList.toggle('settingVisible');
    document.querySelector('.toggleSettingPart1').classList.toggle('toggleSettingVisible-Rotate1');
    document.querySelector('.toggleSettingPart2').classList.toggle('toggleSettingVisible-Rotate2');
});