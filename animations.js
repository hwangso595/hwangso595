(() => {
    let ptiles = document.getElementsByClassName('project-tile');
    console.log(ptiles)
    for (const ptile of ptiles) {
        ptile.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains('detailed') !== true) {
                e.currentTarget.classList.add('detailed');
            } else {
                e.currentTarget.classList.remove('detailed');
            }
            
        }, false);
    }
    let menuExtend = document.getElementById('nav-extend');
    menuExtend.addEventListener('click', (e) => {
        
        let close = document.getElementById('nav-extend-close');
        let nav = document.getElementById('nav');
        let open = document.getElementById('nav-extend-open');
        console.log(close.style.display)
        if (close.style.display !== "" && close.style.display !== "none") {
            close.style.display = "none"
            open.style.display = "block"
            nav.classList.remove('expanded');
        } else {
            close.style.display = "block"
            open.style.display = "none"
            nav.classList.add('expanded');
        }
    })

    
})();