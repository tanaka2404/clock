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
let designMode = document.getElementById('designMode');
designMode.addEventListener('change', (e) => {
    if(designMode.value == "light"){
        light();
    }else if(designMode.value == "dark"){
        dark();
    }
});

window.onload = function(){
    const cookies = document.cookie;
    const array = cookies.split(';');
    let result = array.indexOf('Theme=light');
    let subResult = array.indexOf('Theme=dark');
    if ( result > -1){
        designMode.value = "light";
        light();
    }else if ( subResult > -1){
        designMode.value = "dark";
        dark();
    }
}
