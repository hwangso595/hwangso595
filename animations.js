(() => {
    let ptiles = document.getElementsByClassName('project-tile');
    let myScript = (e) => {
        console.log(e.currentTarget.getBoundingClientRect().top)
        console.log(document.documentElement.scrollTop)
        if (e.currentTarget.classList.contains('detailed') !== true) {
            e.currentTarget.classList.add('detailed');
        } else {
            e.currentTarget.classList.remove('detailed');
        }
        
    }
    console.log(ptiles)
    for (const ptile of ptiles) {
        console.log(ptile)
        ptile.addEventListener("click", myScript, false);
    }

    
})();