jQuery(function ($) {


    let UI = {
        slider: function () {

            $('#owl-company').owlCarousel({
                margin: 30,
                nav: false,
                dots: false,
                autoplay: true,
                autoPlaySpeed: 4000,
                autoplayTimeout: 4000,
                smartSpeed: 1000,
                mouseDrag: true,
                loop: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1100: {
                        items: 7
                    }
                }
            });

            $('#next').click(function () {
                $('#owl-company').trigger('next.owl.carousel');
            })

            $('#prev').click(function () {
                $('#owl-company').trigger('prev.owl.carousel', [300]);
            })

            $('.shopping .owl-carousel').owlCarousel({
                margin: 30,
                nav: false,
                dots: false,
                autoplay: true,
                autoPlaySpeed: 3000,
                autoplayTimeout: 3000,
                smartSpeed: 1000,
                mouseDrag: true,
                loop: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1100: {
                        items: 4
                    }
                }
            });

            $('#shopping_next').click(function () {
                $('.shopping .owl-carousel').trigger('next.owl.carousel');
            });

            $('#shopping_prev').click(function () {
                $('.shopping .owl-carousel').trigger('prev.owl.carousel', [300]);
            });
        },

        ready: function () {
            UI.slider();
        },
    }

    UI.ready();

    // Tab
    $(".tabs .tabs__nav-item").click(function () {
        const tabName = $(this).data("tab");

        $(".tabs__content").hide();

        $(".tabs .tabs__nav-item").removeClass("active");

        $("#" + tabName).show();
        $(this).addClass("active");
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Kiểm tra xem dark mode đã được kích hoạt trong localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
    }

    darkModeToggle.addEventListener('click', () => {
        // Khi người dùng kích hoạt hoặc tắt dark mode, thay đổi trạng thái và lưu nó trong localStorage
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        } else {
            body.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        }
    });

    const menuSelect = document.querySelector(".menu__select");
    const selectItem = document.querySelector(".menu__select-item");

    menuSelect.addEventListener('click', () => {
        if (selectItem.classList.contains('active')) {
            selectItem.classList.remove('active');
        } else {
            selectItem.classList.add('active');
        }
    });

});