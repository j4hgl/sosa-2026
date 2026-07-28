// ======================================
// SOSA 2026 Popup Navigation
// ======================================

// Buttons
const stage12Btn = document.getElementById("stage12Btn");
const stage34Btn = document.getElementById("stage34Btn");

// Overlay
const overlay = document.getElementById("overlay");

// Popups
const popup12 = document.getElementById("popup12");
const popup34 = document.getElementById("popup34");

// Close buttons
const close12 = document.getElementById("close12");
const close34 = document.getElementById("close34");

// ----------------------------
// Open popup
// ----------------------------

function openPopup(popup) {
    overlay.classList.add("show");
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
}

// ----------------------------
// Close popup
// ----------------------------

function closePopup() {
    overlay.classList.remove("show");
    popup12.classList.remove("show");
    popup34.classList.remove("show");
    document.body.style.overflow = "auto";
}

// ----------------------------
// Button Events
// ----------------------------

if(stage12Btn){
    stage12Btn.onclick = function(){
        openPopup(popup12);
    };
}

if(stage34Btn){
    stage34Btn.onclick = function(){
        openPopup(popup34);
    };
}

if(close12){
    close12.onclick = closePopup;
}

if(close34){
    close34.onclick = closePopup;
}

if(overlay){
    overlay.onclick = closePopup;
}

// ----------------------------
// ESC Key
// ----------------------------

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closePopup();

    }

});
