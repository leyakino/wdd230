var w = window.matchMedia("(max-width: 567px)");

//var v = document.getElementById("bottomm");

var x = document.querySelector("#togbtn span:nth-child(1)");

var y = document.querySelector("#togbtn span:nth-child(2)");

var z = document.getElementById("bottomm");



function toggleMenu() {

    //document.getElementById("bottomm").classList.toggle("hide");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        //z.style.display = "none";
        gsap.to(z, 1, {left:"-100%", ease:Expo.easeInOut});
    } else {
        x.style.display = "none";
        y.style.display = "block";
        //z.style.display = "block";
        gsap.to(z, 1, {left:0, ease:Expo.easeInOut});
    }

}

function disb(w) {
    if (w.matches) {
       // z.style.display = "none";
        gsap.to(z, 0, {left:"-100%", ease:Expo.easeInOut});
        
        x.style.display = "block";
        y.style.display = "none";
    } else {
       // z.style.display = "block";
        gsap.to(z, 0, {left:0, ease:Expo.easeInOut});
        
    }
}

disb(w)
w.addListener(disb)