const panels = document.querySelectorAll('.panel') //querySelectorAll selects all the panels. It selects all panels and stores them in a NodeList

panels.forEach((panel)=>{  //forEach takes panel as parameter and loops through it
    panel.addEventListener('click', ()=>{ //add eventlistners on panels and when a click is done, run a particular function
        removeActiveClasses()  // a function to remove all currently active
        panel.classList.add('active') //when we click on an image, it triggers the active class

    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active') // this function will loop all the active classes and remove them
    })
}