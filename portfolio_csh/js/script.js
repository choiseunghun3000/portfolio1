//반응형 메뉴 클릭

const hamBtn = document.querySelector('#hammenu');
const menu = document.querySelector('nav ul');
const xBtn = document.querySelector('#xmenu');

hamBtn.addEventListener('click', function () {
    menu.style.transform = 'translateY(0%)';
});
xBtn.addEventListener('click', function () {
    menu.style.transform = 'translateY(-100%)';
});

// 타이핑 모션

const typed = new Typed(".typed", {
    strings: ["Hellow! This is CSH's portfolio"], //브라우저에 띄워줄 문구
    stringsElement: null, //초기 공간을 비운다.
    typeSpeed: 50, //타이핑 속도
    backSpeed: 50, //backspace 속도
    smartBackspace: true, //동일한 문구가 존재할 때, backspace로 제거못하도록 구성후, 다음 문장을 표현
    startDelay: 500, //최초 타이핑 시간을 1초만큼 지연시킴
    backDelay: 500, //이전문장을 모두 타이핑한 후, 1초 후 backspace가 진행되도록 구성
    loop: true,
    showCursor: true,
    cursorChar: "|" //커서의 형태를 구성
});

// 스크롤 원텍스트
let Scroll = document.querySelector('#scroll');
let outterText = document.querySelector('.outterText')
let innerText = document.querySelector('.innerText')

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    Scroll.style.clipPath = "circle(" + value + "px at center center)";
    outterText.style.left = 100 - value / 5 + '%';
    innerText.style.left = 100 - value / 5 + '%';

});



///포폴 수동슬라이드
document
    .querySelector('#number1')
    .addEventListener('click', function () {
        document
            .querySelector('#pofolbox_cont2')
            .style
            .transform = 'translateX(0%)';
    });
document
    .querySelector('#number2')
    .addEventListener('click', function () {
        document
            .querySelector('#pofolbox_cont2')
            .style
            .transform = 'translateX(-25%)';
    });
document
    .querySelector('#number3')
    .addEventListener('click', function () {
        document
            .querySelector('#pofolbox_cont2')
            .style
            .transform = 'translateX(-50%)';
    });
document
    .querySelector('#number4')
    .addEventListener('click', function () {
        document
            .querySelector('#pofolbox_cont2')
            .style
            .transform = 'translateX(-75%)';
    });

/////다음버튼 클릭
var NowPo = 1;
var slideLength = document.getElementsByClassName('pofol_box').length;//총 포폴갯수
console.log(slideLength);

document.querySelector('#next').addEventListener('click', function () {
    if(NowPo < slideLength){
    document.querySelector('#pofolbox_cont2').style.transform = 'translateX(-'+(NowPo*25)+'%)';
    NowPo += 1;
    }else if (NowPo == slideLength ){
        document.querySelector('#next').style.opacity = '0';
    }
});


/////이전버튼 클릭
document.querySelector('#prev').addEventListener('click', function () {   
    if((NowPo - 1) > -1){
    document.querySelector('#pofolbox_cont2').style.transform = 'translateX(-'+((NowPo - 1)*25)+'%)';
    NowPo -= 1;
    document.querySelector('#next').style.opacity = '1';
    }
    console.log(NowPo);
});


///스크롤시 위,네비바 나타남
let userHasScrolled = false;
window.addEventListener('scroll', (e) => {
    userHasScrolled = true;
    this.lastKnownScrollPosition = window.scrollY;
    console.log("lastKnownScrollPosition : ", this.lastKnownScrollPosition)
    if ($(window).scrollTop() > 2000) {
        $("#up").css({'opacity': '1'});
        $(".sidebar-navigation").css({'opacity': '1'});
    } else {
        $("#up").css({'opacity': '0'});
        $(".sidebar-navigation").css({'opacity': '0'});
    }
});



function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    const elems = document.querySelectorAll(' #about_title ,.big_skill,.skills_txt,.pofol_title,.contact fieldset');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(70px)';
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
      }
    })
  }
  
  
  
  window.addEventListener('scroll', handleScroll);


// 로딩화면 페이드아웃
$(window).on('load', function () {
    $('#loader_box')
        .delay('4000')
        .fadeOut();

});
//메뉴목록 누르면 그 페이지로 스크롤
$(document).ready(function () {
    $("body").niceScroll({
        cursorcolor:"#fff",
        cursorwidth:"4px"
      });


    $("nav ul li ").click(function (e) {
        e.preventDefault();
        const $rel = $(this).attr("rel");
        $("html, body")
            .stop()
            .animate({
                scrollTop: $("#" + $rel)
                    .offset()
                    .top
            }, 1000);
    });
    $(".sidebar-navigation ul li").click(function (e) {
        e.preventDefault();
        const $rel = $(this).attr("rel");
        $("html, body")
            .stop()
            .animate({
                scrollTop: $("#" + $rel)
                    .offset()
                    .top
            }, 1000);

    });
    //맨위버튼
    $("#up").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});



