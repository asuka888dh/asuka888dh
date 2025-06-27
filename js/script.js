document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.card').forEach((el, i) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 100 * i);
    });
});

console.log("jsOK!!");
