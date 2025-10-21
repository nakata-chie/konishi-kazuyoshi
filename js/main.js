//   スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 1000, "swing");
        return false;
    });
});

//ハンバーガーメニューを押すと背景が右上から広がる
$(function () {
    $(".open-btn").click(function () {
        $("header").toggleClass('active');
    });
    $("header a, .circle-bg").click(function () {
        $("header").removeClass('active');
    });
});

//全体のfadeIn
$(function () {
    $(window).scroll(function () {
        $(".fadeIn,.fade-news").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 80) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $(".fadeIn-50").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 50) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});

//profileのballoonアニメション
$(function () {
    $(window).scroll(function () {
        $(".top-profile-img,.portfolio-name,.top-message-img").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 50) {
                $(this).addClass("balloon-animation");
            }
        });
    });
});

/* WORKS 時間差でコンテンツが出てくる */
$(function () {
    $(window).scroll(function () {
        $(".box").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 80) {
                $(this).addClass("fadeUp");
            }
        });
    });
});

//トップへ戻る
$(function () {
    let pagetop = $(".to-top");
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 3000) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});

//レスポンシブ時メニュー(アコーディオン)
/* $(function () {
    $('.menu-parent').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).toggleClass("ac-open");
    });
}); */
//ナビをクリックするとサブメニューが表示
$(function () {
    $(".menu-parent").click(function () {
        $(".menu-has-child").toggleClass('open');
    });
    $(".sub-menu a").click(function () {
        $(".menu-has-child").removeClass('open');
    });
});

//タイトルの線が伸びるアニメーション指示
$(function () {
    $(window).scroll(function () {
        $(".page-sec-title").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 50) {
                $(this).addClass("is-inview");
            }
        });
    });
});


