var scrollingElement = document.getElementById('nav');
var scrollThreshold = 300;

window.addEventListener('scroll', function() {
    var scrollTop = scrollingElement.scrollTop || document.documentElement.scrollTop;

    if (scrollTop > scrollThreshold) {
        scrollingElement.style.transition = 'background 0.5s ease, box-shadow 0.5s ease';
        scrollingElement.style.background = '#FFF5F2FF';
        scrollingElement.style.boxShadow = '0 1px 1px -1px rgba(0, 0, 0, 0.22)';
    } else {
        scrollingElement.style.transition = 'background 0.5s ease, box-shadow 0.5s ease';
        scrollingElement.style.background = '';
        scrollingElement.style.boxShadow = '';
    }
});






var links = document.querySelectorAll('ul li a');

links.forEach(function(link) {
    link.addEventListener('click', function(event) {

        links.forEach(function(otherLink) {
            otherLink.classList.remove('active');
        });

        this.classList.add('active');
    });
});


window.addEventListener('scroll', function() {

    links.forEach(function(link) {

        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);


        if (isElementInViewport(targetElement)) {

            links.forEach(function(otherLink) {
                otherLink.classList.remove('active');
            });

            link.classList.add('active');
        }
    });
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}








