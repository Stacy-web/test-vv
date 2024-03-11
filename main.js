const swiper = new Swiper('.swiper-faq', {
    loop: true,
    slidesPerView:4,
    spaceBetween: 24,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

function clearAccordionItem(item) {
    item.classList.remove('accordion__item_active');
    linkText.removeAttribute('style');
}

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