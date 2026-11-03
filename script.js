const wrapper = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");

document.addEventListener("click", (e) => {
    if (
        e.target.matches(".envelope") ||    
        e.target.matches(".right-flap") ||   
        e.target.matches(".left-flap") ||   
        e.target.matches(".sticker")        
    ) {
        wrapper.classList.toggle("open");

        wrapper.classList.add("deactivate-envelope");

        if (!letter.classList.contains("open")) {
            setTimeout(() => {
                letter.classList.add("show-letter");

                setTimeout(() => {
                    letter.classList.remove("show-letter");
                    letter.classList.add("open");
                }, 500);
            }, 1000);
        }
    }
    else if (e.target.matches(".envelope-wrapper *")) {
        wrapper.classList.remove("open");
        wrapper.classList.remove("deactivate-envelope");

        if (letter.classList.contains("open")) {
            letter.classList.add("closing-envelope");

            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("open");
            }, 500); 
        }
    }
});