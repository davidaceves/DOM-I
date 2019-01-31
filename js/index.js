// David Aceves

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
let navA = document.querySelectorAll(["a"]);
let nav = document.querySelector('nav')

logo.setAttribute('src', siteContent["nav"]["img-src"])

navA[0].textContent = ('a', siteContent["nav"]["nav-item-1"]);
navA[1].textContent = ('a', siteContent["nav"]["nav-item-2"]);
navA[2].textContent = ('a', siteContent["nav"]["nav-item-3"]);
navA[3].textContent = ('a', siteContent["nav"]["nav-item-4"]);
navA[4].textContent = ('a', siteContent["nav"]["nav-item-5"]);
navA[5].textContent = ('a', siteContent["nav"]["nav-item-6"]);


for (let i = 0; i < navA.length; i++) {
  navA[i].style.color = "green";
}

console.log(nav.parentNode);

function appendChild (navItem) {
  let node = document.createElement("a");
  let textNode = document.createTextNode(navItem);

  node.appendChild(textNode);
  document.querySelector("nav").appendChild(node);

  node.setAttribute('href', '#');
  node.style.color = "green";
}

appendChild("Sign up");

function prepend (navItem) {
  let node = document.createElement("a");
  let textNode = document.createTextNode(navItem);

  node.prepend(textNode);
  document.querySelector("nav").prepend(node);

  node.setAttribute('href', '#');
  node.style.color = "green";
}

prepend("Home");

// let lineBR = document.createElement("BR"); // tried to create line break element

let ctaH1 = document.querySelector("h1");
let ctaButton = document.querySelector("button"); 
let ctaImg = document.getElementById("cta-img"); 

// ctaH1.textContent = ('h1', siteContent["cta"]["h1"]); // original code without line breaks

ctaH1.innerHTML = 'DOM <br> IS <BR> AWESOME';
ctaButton.textContent = ('button', siteContent["cta"]["button"]);
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let mainH4 = document.querySelectorAll("h4");
let topContentP = document.querySelectorAll(".top-content p")
let middleImg = document.getElementById("middle-img");
let bottomContentP = document.querySelectorAll(".bottom-content p");

mainH4[0].textContent = ('h4', siteContent["main-content"]["features-h4"]);
topContentP[0].textContent = ('p', siteContent["main-content"]["features-content"]);
mainH4[1].textContent = ('h4', siteContent["main-content"]["about-h4"]);
topContentP[1].textContent = ('p', siteContent["main-content"]["about-content"]);

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

mainH4[2].textContent = ('h4', siteContent["main-content"]["services-h4"]);
bottomContentP[0].textContent = ('p', siteContent["main-content"]["services-content"]);
mainH4[3].textContent = ('h4', siteContent["main-content"]["product-h4"]);
bottomContentP[1].textContent = ('p', siteContent["main-content"]["product-content"]);
mainH4[4].textContent = ('h4', siteContent["main-content"]["vision-h4"]);
bottomContentP[2].textContent = ('p', siteContent["main-content"]["vision-content"]);

let contact = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");

contact.textContent = ('h4', siteContent["contact"]["contact-h4"]);
contactP[0].textContent = ('p', siteContent["contact"]["address"]);
contactP[1].textContent = ('p', siteContent["contact"]["phone"]);
contactP[2].textContent = ('p', siteContent["contact"]["email"]);

let footer = document.querySelector("footer");

footer.textContent = ('p', siteContent["footer"]["copyright"])





// let splitH1 = ctaH1.textContent.split("");

// for (let i = 0; i < splitH1.length; i++) {
//   if (splitH1[i] === ' ') {
//     splitH1[i] += lineBR;
//   }
// }

// ctaH1.textContent = ('h1', splitH1.join(''));

// Failed attempt at making a for-in loop to add nav elemetns: 

// const obj = siteContent.nav;

// for (let key in obj) {
//   let value = obj[key];
//   console.log(value)
//   navA[obj].textContent = ('a', siteContent[]);
// }


// for (let i = 0; i < navA.length; i++) {
//   for (let key in obj) {
//     let value = obj[key];
//     console.log(value)
//     navA[i].textContent = ('a', value);
//   }
// }

// for (let i = 0; i < navA.length; i++) {

//   for (let key in obj) {
//     let value = obj[key];

//     navA[i].textContent += ('a', value);
//   }
// }




