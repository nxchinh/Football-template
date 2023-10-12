jQuery(function($) {


    let UI = {
        slider: function() {

            $('#owl-company').owlCarousel({
                margin: 30,
                nav: false,
                dots: false,
                autoplay: true,
                autoPlaySpeed: 4000,
                autoplayTimeout: 4000,
                smartSpeed: 1000,
                mouseDrag: true,
                loop:true,
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

            $('#next').click(function() {
                $('#owl-company').trigger('next.owl.carousel');
            })
            
            $('#prev').click(function() {
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
                loop:true,
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

            $('#shopping_next').click(function() {
                $('.shopping .owl-carousel').trigger('next.owl.carousel');
            })
            
            $('#shopping_prev').click(function() {
                $('.shopping .owl-carousel').trigger('prev.owl.carousel', [300]);
            })

            // $('.ss__brands .owl-carousel').owlCarousel({
            //     loop: true,
            //     margin: 24,
            //     nav: false,
            //     dots: false,
            //     autoplay: true,
            //     autoPlaySpeed: 4000,
            //     autoplayTimeout: 4000,
            //     smartSpeed: 1000,
            //     mouseDrag: true,
            //     responsive: {
            //         0: {
            //             items: 3
            //         },
            //         767: {
            //             items: 5
            //         },
            //         1100: {
            //             items: 7
            //         }
            //     }
            // });
        },

        // switchForm: function () {
        //     if ($(".switchform").length > 0) {
        //         $(".switchform").click(function (e) {
        //             e.preventDefault();
        //             const f = $(this).data('form');
        //             $(".modal__login").attr('data-show', f);
        //             $(".modal__ungtuyen").attr('data-show', f);
        //         });
        //     }
        // },

        ready: function() {
            UI.slider();
            // UI.switchForm();
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

    //Modal
    // jQuery('.modal__toggle[data-modal-action="open"]').click(function(e) {
    //     e.preventDefault();
    //     var targetModal = jQuery(this).attr('data-modal-target');
    //     jQuery('.modal__content[data-modal="' + targetModal + '"]').fadeIn().addClass("in");
    //     jQuery('body').addClass("modal__open").append("<div class='modal__backdrop'></div>");
    
    //     // Close the popup when clicking on the backdrop
    //     jQuery('.modal__backdrop').click(function() {
    //         jQuery('.modal__content[data-modal="' + targetModal + '"]').fadeOut(100).removeClass("in");
    //         jQuery('body').removeClass("modal__open");
    //         jQuery(this).remove();
    //     });
    // });
    
    // jQuery('.modal__content').on('click', '.modal__toggle[data-modal-action="close"]', function(e) {
    //     e.preventDefault();
    //     var targetModal = jQuery(this).closest('.modal__content').attr('data-modal');
    //     jQuery('.modal__content[data-modal="' + targetModal + '"]').fadeOut(100).removeClass("in");
    //     jQuery('body').removeClass("modal__open");
    //     jQuery('.modal__backdrop').remove();
    // });

    // $("#toggle-seach-adv").click(function() {
    //     $("#content-search-adv").slideToggle(500);
    // });

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
    
});