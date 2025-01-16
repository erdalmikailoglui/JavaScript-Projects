document.getElementById('contactForm').onsubmit = function (e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset();
};

document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    };
});