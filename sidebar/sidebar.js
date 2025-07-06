// Pure JS Load XHR 【 --要変更--  変数:7箇所  ID:1箇所 元URL:1箇所 】
var myXml = new XMLHttpRequest();
myXml.onreadystatechange = function() {
    if ((myXml.readyState === 4) && (myXml.status === 200)) {
        document.getElementById("headerSidebar").innerHTML = myXml.responseText; // 挿入先ID
        // ロード後の処理を記述
        let sideBar  = document.getElementById('sidebarMenu');     //サイドバーメニュー
        let SBButton = document.getElementById('openSidebarMenu'); //サイドバーを表示するチェックボックス
        let Horizontal = document.querySelector('.horizontal');
        let diagonal1 = document.querySelector('.diagonal.part-1');
        let diagonal2 = document.querySelector('.diagonal.part-2');
        if(sideBar && SBButton){
            SBButton.addEventListener('change', function(){
                if(SBButton.checked){
                    sideBar.style.transform = 'translateX(0)';
                    Horizontal.style = 'transition: all 0.3s;box-sizing: border-box;opacity: 0;';
                    diagonal1.style = 'transition: all 0.3s;box-sizing: border-box;transform: rotate(135deg);margin-top: 8px;';
                    diagonal2.style = 'transition: all 0.3s;box-sizing: border-box;transform: rotate(-135deg);margin-top: -9px;';
                }else {
                    sideBar.style.transform = 'translateX(252px)';
                    Horizontal.style = 'transition: all 0.3s;box-sizing: border-box;position: relative;float: right;margin-top: 3px;';
                    diagonal1.style = 'position: relative;transition: all 0.3s;box-sizing: border-box;float: right;';
                    diagonal2.style = 'transition: all 0.3s;box-sizing: border-box;position: relative;float: right;margin-top: 3px;';
                }
            });
        }else {
            console.error('Element with ID example not found');
        }
    }
}
myXml.open("GET", "https://raw.githubusercontent.com/tanaka2404/tanaka2404.github.io/refs/heads/main/sidebar/sidebar.html", true);  // 元URL 
myXml.send(null);