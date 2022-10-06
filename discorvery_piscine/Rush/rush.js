

const pages = ['home', 'me', 'hist', 'edu'];
let cur = 0;

function navdown() {
    var b = document.getElementById("nav0");
    b.style.top = ('100%');
    b.style.height = '40%';
   setTimeout(() => {
       navup();
   }, 670);
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
        setglow(cur);
    }

    function scrollup(){
        if (cur != 0){
        cur--;}
        const pages = ['home', 'me', 'hist', 'edu'];
        var p = document.getElementById(pages[cur]);
        setglow(cur);
        if (cur <= 0){
            var p = document.getElementById(pages[0]);
        scrollpage(p);
        setTimeout(() => {
            navdown();
        }, 100);
        return;}
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

    function scrolto(i){
    const pages = ['home', 'me', 'hist', 'edu'];
    var p = document.getElementById(pages[i]);
    setglow(i);
    if (i > cur){
    navdown();
        setTimeout(() => {
            scrollpage(p);
        }, 630);}     
    else {
        scrollpage(p);
        setTimeout(() => {
            navdown();
        }, 100);
    }
    cur = i;
}

    function setglow(i){
        var h = document.getElementById("11");
        var a = document.getElementById("22");
        var e = document.getElementById("33");
        var ed = document.getElementById("44")
        if (i == 0){
            h.style.fontSize = "1.4vw";
        }
        else {
            h.style.fontSize = "0.9vw";
        }
        if (i == 1){
            a.style.fontSize = "1.4vw";
        }
        else {
            a.style.fontSize = "0.9vw";
        }
        if (i == 2){
            e.style.fontSize = "1.4vw";
        }
        else {
            e.style.fontSize = "0.9vw";
        }
        if (i == 3){
            ed.style.fontSize = "1.4vw";
        }
        else {
            ed.style.fontSize = "0.9vw";
        }
    }