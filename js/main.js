$(function() {
    
    "use strict";
    
    $('.head').click(function () {
        console.log('yess');
    });
    //===== Prealoder
    
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Responsive Menu 
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });
        
    }
    
    
    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar").removeClass("sticky");
            $(".transparent-nav img").attr("src", "images/logo-2.png");
        }else{
            $(".navbar").addClass("sticky");
            $(".transparent-nav img").attr("src", "images/logo.png");
        }
    });

    
    
// slide Dwon menu
    $('.foundation .preventive-links .drop-link').click(function () {
        $(this).toggleClass('drop-active');
        $(this).next('.drop-down').slideToggle(500);
    });
    
    
    
    //===== Scroll It
    
    $.scrollIt({
        scrollTime: 1600,
        topOffset: -65,
    });
    
    
    //===== Magnific Popup
    
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    }); 
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    // pop up gallery
//    $('.foundation .preventive-links .poster').click(function () {
//        $('.foundation .preventive-gallery').addClass('gallery-active');
//    });
//    $('.foundation .preventive-gallery .close-gallery').click(function () {
//        $('.foundation .preventive-gallery').removeClass('gallery-active');
//    })
    
    
    //===== slick slider
    
    $('#testimonials .testimonial-slied-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        speed: 800,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: '#testimonials .slider .slider-controller .prev' ,
        nextArrow: '#testimonials .slider .slider-controller .next',
        asNavFor: '#testimonials .testimonial-cont-slied'
    });
    
    $('#testimonials .testimonial-cont-slied').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        asNavFor: '#testimonials .testimonial-slied-image',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
    
    $('#processes .testimonial-slied-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        autoplay: true,
        speed: 700,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: '#processes .slider .slider-controller .prev' ,
        nextArrow: '#processes .slider .slider-controller .next',
        asNavFor: '#processes .testimonial-cont-slied'
    });
    
    $('#processes .testimonial-cont-slied').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        asNavFor: '#processes .testimonial-slied-image',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
    
    
    
    
    
    
    //===== 
    
    
// Load More content
    $(".singel-work").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".singel-work:hidden").slice(0, 4).slideDown();
        if ($(".singel-work:hidden").length === 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
    
    

    
    
    
    
    
});