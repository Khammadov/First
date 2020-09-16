$(document).ready(function () {
    var navItem = $("#myNavbar .navbar .collapse .nav-item");

    navItem.mouseenter(function () {
        $(this).addClass("show");
        $(this).children().eq(0).attr("aria-expanded", true);
        $(this).children().eq(1).addClass("show");
    })

    navItem.mouseleave(function () {
        $(this).removeClass("show");
        $(this).children().eq(0).attr("aria-expanded", false);
        $(this).children().eq(1).removeClass("show");
    })

    $(window).scroll(function () {
        //Fixed nav
        if ($(document).scrollTop() > 90) {
            $("#myNavbar").addClass("fixedPadding");
        }

        if ($(document).scrollTop() > 250) {
            $("#myNavbar").addClass("makeFixed");
        } else {
            $("#myNavbar").removeClass("fixedPadding").removeClass("makeFixed");
        }


        //About us image
        var aboutusImage = $("#homePage #aboutUs .aboutUsImage img");

        if ($(document).scrollTop() > 270) {
            aboutusImage.css({
                "top": "-40px",
                "opacity": "1",
                "transition": "top 0.6s linear"
            })
        } else {
            aboutusImage.css({
                "top": "40px",
                "opacity": "0.6",
                "transition": "top 0.6s linear"
            })
        }
        /* End of about us image*/


        /* To top */
        if ($(document).scrollTop() > 300) {
            $("#toTop .toTopWrapper").css({
                "transform": "scale(1)"
            })
        } else {
            $("#toTop .toTopWrapper").css({
                "transform": "scale(0)"
            })
        }

        var toTopSetInterval;
        $("#toTop .toTopWrapper").click(function () {
            toTopSetInterval = setInterval(toTop, 3);
        })

        function toTop() {
            var docTop = $(document).scrollTop();
            $(document).scrollTop(docTop - 1);

            if (docTop <= 0) {
                clearInterval(toTopSetInterval)
            }
        }


        /* End of to top */
    })

    $(window).on("load", function () {
        $("#intro .introText h4").animate({
            top: "0px",
            opacity: 1
        }, 600)

        $("#intro .introText h1").animate({
            left: "0px",
            opacity: 1
        }, 700)

        $("#intro .introImage img").animate({
            right: "-80px",
            opacity: 1
        }, 900)


        //About us image i about page
        var aboutusImage = $("#aboutPage #aboutUs .aboutUsImage img");

        aboutusImage.css({
            "top": "-40px",
            "opacity": "1",
            "transition": "top 0.4s ease"
        })
        /* End of about us image*/
    })

    /*Popup section*/
    $("#popup .videoWrapper .icon i").click(function () {
        $("#popup").fadeOut(400);
        var videoSrc = $("#popup .popupVideo iframe").attr("src");
        $("#popup .popupVideo iframe").attr("src", videoSrc);

    });

    $("#video .icon i").click(function () {
        $("#popup").css("display", "flex").fadeIn(400);
    });
    /*End o Popup section*/


    /* owl carousel section */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })
    /* End of owl carousel section */

    /* Counter plugin */
    var counterObj = function (myNumber) {
        this.number = myNumber,
            this.time = 1500,
            this.delay = 0,
            this.symbol = true,
            this.fromZero = true
    }

    $(".num1").numScroll(new counterObj(112));

    $(".num2").numScroll(new counterObj(345));

    $(".num3").numScroll(new counterObj(215));

    $(".num4").numScroll(new counterObj(124));
    /* End of Counter plugin */
});