// ==============================
// SMOOTH SCROLL
// ==============================
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            var target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==============================
// ACTIVE NAVBAR ON SCROLL
// ==============================
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {
    var current = "";

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ==============================
// MODEL POPUP MODAL
// ==============================
var modal = document.getElementById("modelModal");
var modalImage = document.getElementById("modalImage");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var closeBtn = document.querySelector(".close");

var modelData = {
    r32: {
        title: "Nissan Skyline GT-R R32",
        image: "img/p15.jpg",
        description: "Introduced in 1989 as the return of the legendary GT-R, designed to dominate Group A racing. Powered by the 2.6L RB26DETT twin-turbo inline-6 engine, producing 280 PS, with Nissan's advanced ATTESA E-TS all-wheel-drive system."
    },
    r33: {
        title: "Nissan Skyline GT-R R33",
        image: "img/p13.jpg",
        description: "Introduced in 1995 as the successor to the legendary R32 GT-R. Powered by the 2.6L RB26DETT twin-turbo inline-6 engine with an improved ATTESA E-TS Pro AWD system."
    },
    r34: {
        title: "Nissan Skyline GT-R R34",
        image: "img/p16.jpg",
        description: "Introduced in 1999 as the fifth generation of the Skyline GT-R. Powered by the legendary 2.6L RB26DETT twin-turbo engine with 6-speed manual transmission."
    },
    r35: {
        title: "Nissan GT-R R35",
        image: "img/p17.jpg",
        description: "Introduced in 2007 as a standalone GT-R model. Powered by the 3.8L twin-turbo VR38DETT V6 engine with ATTESA E-TS Pro all-wheel drive."
    },
    s13: {
        title: "Nissan Silvia S13",
        image: "img/p18.jpg",
        description: "Introduced in 1988 as a 2-door sports coupe. Highly popular in drifting due to its lightweight chassis and rear-wheel-drive layout."
    },
    s14: {
        title: "Nissan Silvia S14",
        image: "img/p19.jpg",
        description: "Introduced in 1993 with a lower and wider design than the S13. Powered by the 2.0L SR20DET turbo engine."
    },
    s15: {
        title: "Nissan Silvia S15",
        image: "img/p20.jpg",
        description: "Introduced in 1999 as the final generation of the Nissan Silvia. Features a 6-speed manual transmission and aggressive styling."
    },
    "180sx": {
        title: "Nissan 180SX",
        image: "img/p21.jpg",
        description: "Introduced in 1989 as a fastback sports car based on the S13 platform, featuring pop-up headlights."
    }
};

document.querySelectorAll(".model-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        var model = button.dataset.model;
        if (!modelData[model]) return;

        if (modal && modalTitle && modalDescription && modalImage) {
            modal.style.display = "block";
            modalTitle.innerHTML = modelData[model].title;
            modalDescription.innerHTML = modelData[model].description;
            modalImage.src = modelData[model].image;
        }
    });
});

if (closeBtn) {
    closeBtn.onclick = function () {
        if (modal) modal.style.display = "none";
    };
}

// ==============================
// TECHNOLOGY MODAL
// ==============================
var techModal = document.getElementById("techModal");
var techClose = document.querySelector(".tech-close");
var techTitle = document.getElementById("techTitle");
var techText = document.getElementById("techDescription");

var techData = {
    awd: {
        title: "ATTESA E-TS AWD",
        text: "ATTESA E-TS is Nissan's advanced all-wheel-drive system. It automatically distributes power between the front and rear wheels to maximize grip."
    },
    rb26: {
        title: "RB26DETT Engine",
        text: "The RB26DETT is a legendary 2.6L twin-turbo inline-six engine used in the R32, R33 and R34 GT-R."
    },
    vr38: {
        title: "VR38DETT Engine",
        text: "The VR38DETT is the hand-built twin-turbo V6 engine used in the R35 GT-R."
    },
    nismo: {
        title: "NISMO Performance",
        text: "NISMO is Nissan Motorsport, developing high-performance parts and special GT-R models."
    }
};

document.querySelectorAll(".tech-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        var tech = btn.dataset.tech;
        if (!techData[tech]) return;

        if (techModal && techTitle && techText) {
            techTitle.innerHTML = techData[tech].title;
            techText.innerHTML = techData[tech].text;
            techModal.style.display = "block";
        }
    });
});

if (techClose) {
    techClose.onclick = function () {
        if (techModal) techModal.style.display = "none";
    };
}

// ==============================
// GALLERY POPUP
// ==============================
var galleryModal = document.getElementById("galleryModal");
var galleryImage = document.getElementById("galleryImage");
var galleryClose = document.querySelector(".gallery-close");

document.querySelectorAll(".gallery-item img").forEach(function (img) {
    img.addEventListener("click", function () {
        if (galleryModal && galleryImage) {
            galleryModal.style.display = "flex";
            galleryImage.src = img.src;
        }
    });
});

if (galleryClose) {
    galleryClose.onclick = function () {
        if (galleryModal) galleryModal.style.display = "none";
    };
}

// ==============================
// COMPARE MODAL
// ==============================
var compareModal = document.getElementById("compareModal");
var compareBtn = document.getElementById("compareBtn");
var compareClose = document.querySelector(".compare-close");

if (compareBtn) {
    compareBtn.addEventListener("click", function () {
        if (compareModal) compareModal.style.display = "block";
    });
}

if (compareClose) {
    compareClose.onclick = function () {
        if (compareModal) compareModal.style.display = "none";
    };
}

// ==============================
// CONTACT FORM
// ==============================
var form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var subjectInput = document.getElementById("subject");
        var messageInput = document.getElementById("message");

        if (!nameInput || !emailInput || !subjectInput || !messageInput) return;

        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var subject = subjectInput.value.trim();
        var message = messageInput.value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please complete all fields.");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
}

// ==============================
// SCROLL ANIMATION
// ==============================
if (typeof IntersectionObserver !== "undefined") {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade");
            }
        });
    });

    document.querySelectorAll("section").forEach(function (section) {
        observer.observe(section);
    });
}

// ==============================
// LOADING SCREEN
// ==============================
window.addEventListener("load", function () {
    var loader = document.querySelector(".loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 600);
    }
});

// ==============================
// BACK TO TOP BUTTON
// ==============================
var topButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (topButton) {
        if (window.scrollY > 500) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }
    }
});

if (topButton) {
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==============================
// STICKY HEADER
// ==============================
var header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            header.style.background = "#000";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
        } else {
            header.style.background = "rgba(0,0,0,.8)";
            header.style.boxShadow = "none";
        }
    });
}

// ==============================
// SEARCH BUTTON
// ==============================
var search = document.querySelector(".search");

if (search) {
    search.addEventListener("click", function () {
        var keyword = prompt("Search Model (R32, R33, R34, R35, S13, S14, S15, 180SX)");
        if (keyword) {
            location.href = "#models";
        }
    });
}

// ==============================
// ESC CLOSE POPUP
// ==============================
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (modal) modal.style.display = "none";
        if (techModal) techModal.style.display = "none";
        if (compareModal) compareModal.style.display = "none";
        if (galleryModal) galleryModal.style.display = "none";
    }
});

// ==============================
// AUTO CLOSE POPUP ON OUTSIDE CLICK
// ==============================
window.addEventListener("click", function (e) {
    if (e.target === modal) modal.style.display = "none";
    if (e.target === techModal) techModal.style.display = "none";
    if (e.target === compareModal) compareModal.style.display = "none";
    if (e.target === galleryModal) galleryModal.style.display = "none";
});

// ==============================
// HERO IMAGE SLIDER
// ==============================
var heroImage = document.getElementById("heroImage");

if (heroImage) {
    var heroImages = [
        "img/r32.png",
        "img/r33.png",
        "img/r34.png",
        "img/r35.png"
    ];

    var currentHero = 0;

    setInterval(function () {
        currentHero = (currentHero + 1) % heroImages.length;
        heroImage.src = heroImages[currentHero];
    }, 4000);
}

// ==============================
// COUNTER ANIMATION
// ==============================
var counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
    var updateCounter = function () {
        var target = Number(counter.getAttribute("data-target"));
        var count = Number(counter.innerText);
        var increment = target / 150;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// eslint-disable-next-line no-console
console.log("Nissan GT-R Website Loaded Successfully");