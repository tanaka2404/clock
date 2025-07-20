const cookies = document.cookie;
const array = cookies.split(';');

array.forEach(function(value) {
    const content = value.split('=');
    console.log(content[1]); // valueを取得
})
let designMode = document.getElementById('designMode');
designMode.addEventListener('change', (e) => {
    if(designMode.value == "light"){
        document.cookie = 'Theme=light';
        document.documentElement.style.setProperty('--default-black', 'black');
        document.documentElement.style.setProperty('--default-white', 'white');
        console.log("light");
    }else if(designMode.value == "dark"){
        document.cookie = 'Theme=dark';
        document.documentElement.style.setProperty('--default-black', 'white');
        document.documentElement.style.setProperty('--default-white', 'black');
        console.log("dark");
    }
});