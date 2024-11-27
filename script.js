document.querySelectorAll('.contact1').forEach(a => {
    a.addEventListener('click', () => {
        const target = a.getAttribute('data-target');
        const section4 = document.querySelector(target);

        section4.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.btn').addEventListener('click', () => {
    const section2 = document.querySelector('.section2');
    section2.scrollIntoView({
        behavior: 'smooth'
    })
});

function handleScrollAnimations() {
    const elements = document.querySelectorAll("[data-animate]");

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

document.addEventListener("scroll", handleScrollAnimations);



document.querySelector('.secBtn').addEventListener('click', () => {
    const section3 = document.querySelector('.section3');
    section3.scrollIntoView({
        behavior: 'smooth'
    })
})

document.querySelector('.submitBtn').addEventListener('click', () => {
    alert("Form Submitted! Thanks for reaching out.");
});

document.querySelector('.footer>#arrowUp').addEventListener('click', ()=>{
    const container= document.querySelector('.container');

    container.scrollIntoView({
        behavior:'smooth'
    });
});

document.addEventListener("scroll", () => {
    const animatedElements = document.querySelectorAll("[data-animate]");

    animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (inView) {
            element.style.animationPlayState = "running";
        } else {
            element.style.animationPlayState = "paused";
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".contact-img");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    image.classList.add("active");
                } else {
                    image.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    observer.observe(image);
});







