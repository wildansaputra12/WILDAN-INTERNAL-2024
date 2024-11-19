document.querySelectorAll('a[href^="#"').forEach(ancor =>  {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrolintoview({
            behavior:"smooth"
        })
    })
})