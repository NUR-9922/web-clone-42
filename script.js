let lineWidth = 10;
let curentPage = 0;
function line() {
    document.querySelector(".line").style.width = `${lineWidth}%`

}

gsap.registerPlugin(ScrollTrigger);
gsap.to('.heading-1', {
    y: -250,
    duration: 0.2,
    scrollTrigger: {
        trigger: '.page-1',
        start: '66% 57%',
        end: '70% center',
        scrub: 1, // Enable scrubbing for a smoother effect
        onEnter: () => {
            lineWidth = 20;
            line();
            document.querySelector(".line").style.backgroundColor = "#000";
            document.querySelector(".box ").style.borderColor = "#000";
            document.querySelector(".box ").style.transform = " rotate(90deg)";
            document.querySelector(".box ").style.width = " 170px"
            document.querySelector(".box ").style.transform = "80%";
           
            dont();
            setTimeout(function () { boxTextShowing() }, 1000);
        },
        onEnterBack: () => {
            lineWidth = 10;
            line();
            document.querySelector(".box ").innerHTML = "";
            document.querySelector(".box ").style.borderColor = "#FFF";
            document.querySelector(".box ").style.transform = " translate(-50%, -50%) rotate(0deg)";
            document.querySelector(".box ").style.width = " 50px"
            document.querySelector(".box ").style.transform = "50%";
            document.querySelector(".line").style.backgroundColor = "#FFF";
            dontBack() 
        },
    }
});

gsap.to('.heading-2', {
    marginTop: "0px",
    duration: 1,
    scale: 1, // Use 'scale' instead of 'transform'
    scrollTrigger: {
        trigger: '.page-2',
        start: "16% 57%",
        end: '30% center',
        scrub: 1, // Enable scrubbing for a smoother effect
    }
});

gsap.to('.heading-3', {
    marginTop: "0px",
    duration: 1,
    scale:1,
    scrollTrigger: {
        trigger: '.page-3',
        start: "36% 57%",
        end: '30% center',
        scrub: 1, // Enable scrubbing for a smoother effect
        onEnter: () => {
            document.querySelector(".box ").style.width = " 0px"
            document.querySelector(".box ").style.height = " 0px"
            lineWidth = 30;
            dont();
            line();
            document.querySelector(".line").style.backgroundColor = "#fff";

        },
        onEnterBack: () => {
            lineWidth = 20;
            line();
            document.querySelector(".box ").style.width = " 180px";
            document.querySelector(".box ").style.height = " 50%";
            boxTextShowing();
            document.querySelector(".line").style.backgroundColor = "#000";
            dontBack() 
        },
    }
});


gsap.to('.backImg ', {
    marginTop: "70px",
    duration: 1.5,
    scrollTrigger: {
        trigger: '.page-3',
        start: "36% 57%",
        end: '30% center',
        scrub: 1, // Enable scrubbing for a smoother effect

    }
});







gsap.to('.heading-4', {
    marginTop: "0px",
    duration: 1,
    scale: 1,
    scrollTrigger: {
        trigger: '.page-4',
        start: "36% 57%",
        end: '30% center',
        scrub: 1, // Enable scrubbing for a smoother effect
        onEnter: () => {
            lineWidth = 50;
            line();
            document.querySelector(".line").style.backgroundColor = "#FFF";
            dont();

        },
        onEnterBack: () => {
            lineWidth = 30;
            line();
            document.querySelector(".line").style.backgroundColor = "#fff";
            dontBack() 
        },
    }

})



function boxTextShowing() {
    document.querySelector(".box ").style.display = "";
    const text = "CSS scroll snap enhances scrolling, ensuring a smooth and controlled user experience. Ideal for sections or galleries, it visually aligns content for a polished look.";
    const words = text.split(" ");

    // Create the HTML structure
    const boxInnerElement = document.createElement("div");
    boxInnerElement.classList.add("box-inner");

    const headingElement = document.createElement("div");
    headingElement.classList.add("heading");
    headingElement.textContent = "Scroll Snap: Enhancing User Experience";

    const disElement = document.createElement("div");
    disElement.classList.add("dis");

    // Fill the .dis element with span elements
    for (let i = 0; i < words.length; i++) {
        const span = document.createElement("span");
        span.textContent = words[i] + " ";
        disElement.appendChild(span);
    }

    // Append elements to boxInnerElement
    boxInnerElement.appendChild(headingElement);
    boxInnerElement.appendChild(disElement);

    // Clear the existing content and append the new .box-inner element
    const boxElement = document.querySelector(".box");
    boxElement.innerHTML = "";
    boxElement.appendChild(boxInnerElement);

    // Now you can animate the text using GSAP within the .box-inner container
    gsap.from(".box-inner span", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
    });
}



let dots = document.querySelectorAll(".dot");
function dont() {
    curentPage++;
    for (let index = 0; index < dots.length; index++) {
        dots[index].style.width = "10px";
        dots[index].style.height = "10px";
        
    }
    dots[curentPage - 1].style.width = "20px";
    dots[curentPage - 1].style.height = "20px";
}

dont(); // Call the function to update styles for the second page

function dontBack() {
    curentPage--;
    for (let index = 0; index < dots.length; index++) {
        dots[index].style.width = "10px";
        dots[index].style.height = "10px";
    }
    dots[curentPage - 1].style.width = "20px";
    dots[curentPage - 1].style.height = "20px";
}