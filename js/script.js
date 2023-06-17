$(function(){

    $('.header-modal__dropdown img').on('click', function(e){
        e.preventDefault();
        $('.header-modal__lists').toggleClass('active')
    })

    $('.header-modal__dropdowns img').on('click', function(e){
        e.preventDefault();
        $(this).parent('.header-modal__dropdowns').next('.header-modal__listss').toggleClass('active')
    })

    $('#sliderTeam1').slick({
        slidesToShow: 3,
        prevArrow: `<img class="team__arrow team__arrow_left" src="images/green-left.svg" alt="team arrow">`,
        nextArrow: `<img class="team__arrow team__arrow_right" src="images/green-right.svg" alt="team arrow">`,
        infinite: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    // $('#sliderTeam2').slick({
    //     slidesToShow: 3,
    //     prevArrow: `<img class="team__arrow team__arrow_left" src="images/green-left.svg" alt="team arrow">`,
    //     nextArrow: `<img class="team__arrow team__arrow_right" src="images/green-right.svg" alt="team arrow">`,
    //     infinite: false,
    //     responsive: [
    //         {
    //             breakpoint: 900,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },

    //         {
    //             breakpoint: 621,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // })

    
    $('.slick-disabled').addClass('disabledArrow')

    $('.team .team__arrow').on('click', function(){
        $(this).parents('.team__slider').find('.team__arrow').removeClass('disabledArrow')
        if($(this).hasClass('slick-disabled')){
            $(this).addClass('disabledArrow')
        }
    })
  
    $('.video-review__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        
        dotsClass: 'video-review__dots',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // prevArrow: `<img class="team__arrow team__arrow_left" src="images/green-left.svg" alt="team arrow">`,
                    // nextArrow: `<img class="team__arrow team__arrow_right" src="images/green-right.svg" alt="team arrow">`,
                    // arrows: true
                }
            }
        ]
    })

    $('#wonSlider1, #wonSlider2, #wonSlider3, #wonSlider4').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        dotsClass: 'dots'
    })
    

    $('.review__section').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        dotsClass: 'dots',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 99999999999,
                settings: 'unslick'
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    })

    

    $('.about__view').slick({
        slidesToShow: 1,
        autoplay: 2000,
        fade: true,
        prevArrow: `<button class="arrow arrow__left">
                        <img src="images/arrow-left.svg" alt="arrow icon">
                    </button>`,
        nextArrow: `<button class="arrow arrow__right">
                        <img src="images/arrow-right.svg" alt="arrow icon">
                    </button>`,
        responsive: [
            {
                breakpoint: 621,
                settings: {
                    arrows: false
                }
            },
        ]
    })



   

    $('.win__inner').slick({
        slidesToShow: 2,
        prevArrow: `<img class="team__arrow team__arrow_left" src="images/green-left.svg" alt="team arrow">`,
        nextArrow: `<img class="team__arrow team__arrow_right" src="images/green-right.svg" alt="team arrow">`,
        infinite: false,
        responsive: [
            {
                breakpoint: 99999999999,
                settings: 'unslick'
            },

            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    let btnActive = false;

    $('.header__btn').on('click', function(){
        btnActive = !btnActive;
        if(btnActive){
            $(this).find('img').attr('src', 'images/menu-btn-icon.svg');
            $('.header-modal').addClass('active')
        } else{
            $(this).find('img').attr('src', 'images/menu-btn.svg');
            $('.header-modal').removeClass('active')
        }
    })



    $('.win__content .team__arrow').on('click', function(){
        $(this).parents('.win__content').find('.team__arrow').removeClass('disabledArrow')
        if($(this).hasClass('slick-disabled')){
            $(this).addClass('disabledArrow')
        }
    })


    // $('.header-modal__current img').on('click', function(){
    //     $(this).parent().siblings('.header-modal__list').toggleClass('active')
    // })
    
    // $('.header-modal__current img').on('click', function(){
    //     $(this).parent().siblings('.header-modal__minilist').toggleClass('active')
    //     $(this).parent('.header-modal__current').toggleClass('active')
    // })


    // MODAL

    $('.video-review__inner img').on('click', function(){
        $('.modal').addClass('active')
    })
    
    $('.modal__close').on('click', function(){
        $('.modal').removeClass('active')
    })

});


let body = document.querySelector('body')
// MODAL CLOSING FUNCTION

function closeModal(modalName, reverse = false){
    modalName = document.querySelector(modalName)
    window.addEventListener('click', function(e){
        if(reverse){
            if(e.target === modalName){
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'
            }
        } else{
            if(e.target !== modalName){
                modalName.classList.remove('active')
                body.style.overflowY = 'initial'

            }
        }
       
    })
}

closeModal('.modal', true)


function createAccordion(target, content){
    const styleSheet = document.styleSheets[0]
    styleSheet.insertRule('.accordion-style { max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out }', styleSheet.cssRules.length);
    target = document.querySelectorAll(target)
    content = document.querySelectorAll(content)

    
    for(let contentItem of content){
        // parent creating
        let parentElement = document.createElement('div');

        // adding class to parent
        parentElement.classList.add('accordion-content');
        
        contentItem.parentNode.insertBefore(parentElement, contentItem);
        parentElement.appendChild(contentItem);
        parentElement.classList.add('accordion-style')
    }


    for(let targetItem of target){
        targetItem.addEventListener('click', function(){
            this.parentElement.classList.toggle('active')
            itemContent = this.parentElement.nextElementSibling;
            if (itemContent.style.maxHeight) {
                itemContent.style.maxHeight = null;
            } else {
                itemContent.style.maxHeight = itemContent.scrollHeight + "px";
            }
        })
    }

    
}

function createTab(tabName, contentName){
    tabName = document.querySelectorAll(tabName);
    contentName = document.querySelectorAll(contentName);

    let tabsArray = Array.from(tabName)
    tabsArray.map( (tab, tabIndex) => {
        tab.addEventListener('click', function(){
            for(let tabAll of tabName) tabAll.classList.remove('active')
            this.classList.add('active')
    
            for(let tabsContents of contentName) tabsContents.classList.remove('active')
            contentName[tabIndex].classList.add('active')
        })
    } )
}

createTab('.won__tab', '.won__wrapper')