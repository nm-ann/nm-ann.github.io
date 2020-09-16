document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    elems = document.querySelectorAll('.scrollspy');
    instances = M.ScrollSpy.init(elems, {});
    scroll()
});

window.onscroll = function () { scroll() };

function scroll() {
    document.documentElement.dataset.scroll = window.scrollY;
}