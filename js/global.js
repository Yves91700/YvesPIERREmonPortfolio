function menuMobile() {
    const btn = document.querySelector('.burger')
    const header = document.querySelector('.header');
    btn.addEventListener('click', () => {
        
        btn.addEventListener('click', ()=>{
            header.classList.toggle('show-nav');
        })
    })
}

menuMobile();


