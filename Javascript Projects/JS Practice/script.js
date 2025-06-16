window.addEventListener("mousemove", function(dets){

    let rectangle = document.querySelector("#rectangle");
    let xVal = gsap.utils.mapRange(0, this.window.innerWidth, 100 + (rectangle.getBoundingClientRect().width/2), window.innerWidth-(100+rectangle.getBoundingClientRect().width/2), dets.clientX)
    
    gsap.to("#rectangle",{
        left: xVal + "px",
        ease:Power3
    })
})