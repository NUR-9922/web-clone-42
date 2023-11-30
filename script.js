gsap.registerPlugin(ScrollTrigger);
let lineWidth = 10;
let curentPage = 0;

function line() {
    document.querySelector(".line").style.width = `${lineWidth}%`;
}

gsap.from('.heading-1, .heading-1 h5', {
    y: -250,
    duration: 1,
    stagger: 0.2,
    onComplete: startScrollAnimation,
});

gsap.to(".box", {
    delay: 1,
    width: "50px",
    height: "50%",
    opacity: 1,
    duration: 0.4,
});

function startScrollAnimation() {
    gsap.to('.heading-1, .heading-1 h5', {
        y: -250,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.page-1',
            start: '66% 57%',
            end: '70% center',
            scrub: 2,
            onEnter: () => {
                lineWidth = 20;
                line();
                document.querySelector(".line").style.backgroundColor = "#000";
                document.querySelector(".box").style.borderColor = "#000";
                document.querySelector(".box").style.transform = "rotate(90deg)";
                document.querySelector(".box").style.width = "170px";
                document.querySelector(".box").style.transform = "80%";
                dont();
                setTimeout(function () { boxTextShowing(); }, 1000);
            },
            onEnterBack: () => {
                lineWidth = 10;
                line();
                document.querySelector(".box").innerHTML = "";
                document.querySelector(".box").style.borderColor = "#FFF";
                document.querySelector(".box").style.transform = "translate(-50%, -50%) rotate(0deg)";
                document.querySelector(".box").style.width = "50px";
                document.querySelector(".box").style.transform = "50%";
                document.querySelector(".line").style.backgroundColor = "#FFF";
                dotBack();
            },
        }
    });
}

gsap.to('.heading-2', {
    marginTop: "0px",
    duration: 1,
    scale: 1,
    scrollTrigger: {
        trigger: '.page-2',
        start: "16% 57%",
        end: '30% center',
        scrub: 1,
    }
});

gsap.to('.heading-3', {
    marginTop: "0px",
    duration: 1,
    scale: 1,
    scrollTrigger: {
        trigger: '.page-3',
        start: "36% 57%",
        end: '30% center',
        scrub: 1,
        onEnter: () => {
            document.querySelector(".box").style.display = "none";
            lineWidth = 30;
            dont();
            line();
            document.querySelector(".line").style.backgroundColor = "#fff";
        },
        onEnterBack: () => {
            lineWidth = 20;
            line();
            document.querySelector(".box").style.display = "";
            boxTextShowing();
            document.querySelector(".line").style.backgroundColor = "#000";
            dotBack();
        },
    }
});

gsap.to('.backImg', {
    marginTop: "70px",
    duration: 1.5,
    scrollTrigger: {
        trigger: '.page-3',
        start: "36% 57%",
        end: '30% center',
        scrub: 1,
    }
});

gsap.to('.heading-4 h5', {
    marginTop: "0px",
    duration: 1.5,
    scale: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: '.page-4',
        start: "36% 57%",
        end: '30% center',
        scrub: 1,
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
            dotBack();
        },
    }
});

gsap.from(".leftText div", {
    x: -700,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.page-5',

    }
});

gsap.from(".rightText div", {
    x: 700,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.page-5',
    }
});

gsap.from(".middletext", {
    scale: 0.5,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.page-5',
    }
});



gsap.to('.middletext', {
    scrollTrigger: {
        trigger: '.page-5',
        scrub: 1,
        onEnter: () => {
            lineWidth = 70;
            line();
            document.querySelector(".line").style.backgroundColor = "#FFF";
            dont();
        },
        onEnterBack: () => {
            lineWidth = 50;
            line();
            document.querySelector(".line").style.backgroundColor = "#fff";
            dotBack();
        },
    }
});









function boxTextShowing() {
    document.querySelector(".box").style.display = "";
    const text = "CSS scroll snap enhances scrolling, ensuring a smooth and controlled user experience. Ideal for sections or galleries, it visually aligns content for a polished look.";
    const words = text.split(" ");

    const boxInnerElement = document.createElement("div");
    boxInnerElement.classList.add("box-inner");

    const headingElement = document.createElement("div");
    headingElement.classList.add("heading");
    headingElement.textContent = "Scroll Snap: Enhancing User Experience";

    const disElement = document.createElement("div");
    disElement.classList.add("dis");

    for (let i = 0; i < words.length; i++) {
        const span = document.createElement("span");
        span.textContent = words[i] + " ";
        disElement.appendChild(span);
    }

    boxInnerElement.appendChild(headingElement);
    boxInnerElement.appendChild(disElement);

    const boxElement = document.querySelector(".box");
    boxElement.innerHTML = "";
    boxElement.appendChild(boxInnerElement);

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
    updateDots();
}

function dotBack() {
    curentPage--;
    updateDots();
}

function updateDots() {
    for (let index = 0; index < dots.length; index++) {
        dots[index].style.width = "10px";
        dots[index].style.height = "10px";
    }

    curentPage = Math.max(0, Math.min(curentPage, dots.length));

    dots[curentPage - 1].style.width = "20px";
    dots[curentPage - 1].style.height = "20px";
}

dont();
