// document.getElementById('next').onclick = function() {
//    let lists = document.querySelectorAll('.item');
//    document.getElementById('slide').appendChild(lists[0]);
// }

// document.getElementById('prev').onclick = function() {
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length -1]);
//  }

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 5
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 5
        //     }
        // }
    })
});