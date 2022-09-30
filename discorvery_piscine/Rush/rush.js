

const pages = ['home', 'me', 'hist', 'edu'];
let cur = 0;

function navdown() {
    var b = document.getElementById("nav0");
    b.style.top = ('100%');
    b.style.height = '40%';
   setTimeout(() => {
       navup();
   }, 630);
    }
    

    function navup() {
        var b = document.getElementById("nav0");
        b.style.top = (0);
        b.style.height = '10%';
    }

    function scrollo(){
        if (cur == 3)
            return;
         cur++;
         navdown();
        const pages = ['home', 'me', 'hist', 'edu'];
        var p = document.getElementById(pages[cur]);
        setTimeout(() => {
            scrollpage(p);
        }, 630);
    }

    function scrollup(){
        if (cur == 0)
            return;
        cur--;
        const pages = ['home', 'me', 'hist', 'edu'];
        var p = document.getElementById(pages[cur]);
        scrollpage(p);
        setTimeout(() => {
            navdown();
        }, 100);
    }

    function scrollpage(p){
        p.scrollIntoView({
            block: 'end',
            behavior: "smooth",
        });
    }

