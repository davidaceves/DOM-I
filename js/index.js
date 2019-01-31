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
let navA = document.querySelectorAll("a");
let nav = document.querySelector('nav')

logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = siteContent.nav;

const navArray = [];

// for in loop pushes value of nav-item into a new array
for (let key in navItems) {
  navArray.push(navItems[key]);
}

// for loop adds the values from the navArray to the anchor text
for (let i = 0; i < navArray.length - 1; i++) {
  navA[i].textContent = navArray[i];
  navA[i].style.color = "green";
}

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

let ctaH1 = document.querySelector("h1");
let ctaButton = document.querySelector("button"); 
let ctaImg = document.getElementById("cta-img");

// event listener

ctaButton.addEventListener("click", function() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "lightgray";
})


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






