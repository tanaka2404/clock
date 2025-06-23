setInterval(() => {
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
    clock.innerHTML = `<h1>${year}:${month}:${date}</h1>` + "<br>" + `<h1>${hours}:${minutes}:${seconds}</h1>`;
}, 1000);