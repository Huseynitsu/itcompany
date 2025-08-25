// numbers
let nums = document.querySelectorAll(".box .number");
let section = document.querySelector(".two");
let started = false; // Function Started ? No

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// partnors
var btn = document.querySelectorAll('.mouse-cursor-gradient-tracking')
for (let i = 0; i < btn.length; i++) {
    btn[i].onmousemove = function (e) {
        var x = e.pageX - btn[i].offsetLeft
        var y = e.pageY - btn[i].offsetTop
        btn[i].style.setProperty('--x', x + 'px')
        btn[i].style.setProperty('--y', y + 'px')
    }
}

$(document).ready(function () {
    // header sticky
    const header = $("header");
    let isHeaderSticky = false;
    const currentUrl = window.location.pathname;
    $(window).scroll(function () {
        // Calculate the scroll position once
        const scrollTop = $(this).scrollTop();

        // Check if the scroll position is greater than or equal to 80
        const shouldBeSticky = scrollTop >= 80;

        // Only update the classes if there's a change in the sticky state
        if (shouldBeSticky !== isHeaderSticky) {
            if (shouldBeSticky) {
                header.addClass("fixed"); // Eğer sticky olması gerekiyorsa, "sticky" sınıfını ekler
            } else {
                header.removeClass("fixed"); // Eğer sticky olması gerekmiyorsa, "sticky" sınıfını kaldırır
            }
            isHeaderSticky = shouldBeSticky;
        }
    });

    var swiper = new Swiper(".swiper-container-h", {
        direction: "horizontal",
        effect: "slide",
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        parallax: true,
        speed: 1600,
        rtl: true,
        loop: true,
        loopFillGroupWithBlank: !0,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });
    var swiper = new Swiper(".swiper-container-h1", {
        direction: "horizontal",
        effect: "slide",
        autoplay: false,
        parallax: true,
        speed: 1600,
        rtl: true,
        loop: true,
        loopFillGroupWithBlank: !0,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
    });

    var swiper = new Swiper(".swiper-container-h1", {
        direction: "horizontal",
        effect: "slide",
        autoplay: true,
        parallax: true,
        speed: 1600,
        rtl: true,
        loop: true,
        loopFillGroupWithBlank: !0,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
    });
});