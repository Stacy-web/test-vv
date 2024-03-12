const swiperFaq = new Swiper('.swiper-faq', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        }
    }
});

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => {
    const link = item.querySelector('.accordion__link');

    link.addEventListener('click', e => {
        e.preventDefault();

        const linkText = item.querySelector('.accordion__text');

        if (item.classList.contains('accordion__item_active')) {
            item.classList.remove('accordion__item_active');
            linkText.removeAttribute('style');
        } else {
            const linkTextScrollHeight = linkText.scrollHeight;

            accordionItems.forEach(sibling => {
                if (
                    sibling.classList.contains('accordion__item_active')
                ) {
                    sibling.classList.remove('accordion__item_active');
                    const linkText = sibling.querySelector('.accordion__text');

                    linkText.removeAttribute('style');
                }
            });

            linkText.style.maxHeight = `${linkTextScrollHeight}px`;
            item.classList.add('accordion__item_active');
        }
    })
});