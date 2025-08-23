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

    var carouselSlider = new Swiper('.service-slider__container', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        speed: 1000,
        autoplay: true,
        spaceBetween: 5,
        breakpoints: {
            1499: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },

            991: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },

            767: {
                slidesPerView: 1,
                slidesPerGroup: 1

            },

            575: {
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });
});