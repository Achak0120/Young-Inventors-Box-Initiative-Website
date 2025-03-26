

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-slide");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
});


class MoveInFromLeft {
    constructor(element, duration = 1000, distance = 300) {
        this.element = document.querySelector(element);
        this.duration = duration;
        this.distance = distance;
        this.initStyles();
    }

    initStyles() {
        this.element.style.position = "relative";
        this.element.style.left = `-${this.distance}px`;
        this.element.style.opacity = "0";
        this.element.style.transition = `left ${this.duration}ms ease-out, opacity ${this.duration}ms ease-out`;
    }

    animate() {
        requestAnimationFrame(() => {
            this.element.style.left = "0px";
            this.element.style.opacity = "1";
        });
    }
}

// Example Usage
window.onload = () => {
    const mover = new MoveInFromLeft("#yibilogo", 1000, 300);
    setTimeout(() => mover.animate(), 500); // Delay to simulate effect
};