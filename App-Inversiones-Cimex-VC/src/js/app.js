//import DATA


// ********** set date ************
// select span
const date1 = document.getElementById("dateServ");
const date2 = document.getElementById("date");
date1.innerHTML = new Date().getFullYear();
date2.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    //console.log("scroll");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 30) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

//********* tabs-about **************/
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//******** DATA-team *********/
const data = [
  {
    img: './',
    name: 'Danivia Palamaz Moreno',
    job: 'Ing. Industrial',
    text: `Jefa del Grupo de Inversiones<br><br>..."Déjame contarte el secreto que me ha llevado a logar mis objetivo. Mi fuerza reside únicamente en mi tenacidad...!!`,
  },
  {
    img: './file/img/team-2.jpg',
    name: 'Leandro E.Pérez',
    job: 'Arquitecto',
    text: `Esp.B Construcción e Inversiones<br><br>"...Todas las personas tienen la disposición de trabajar creativamente. Lo que sucede es que la mayoría jamás lo nota!!"`,
  },
  {
    img: './file/img/team-3.jpg',
    name: 'Dianet Cabanes Martinez',
    job: 'Arquitecta',
    text: `Esp.B Construcción e Inversiones<br><br>"...Si una obra es intensa, válida y tiene una idea potente hará que las imperfecciones queden en un segundo plano...."`,
  },
  {
    img: './file/img/team-4.webp',
    name: 'Ania Gonzales Fernandez',
    job: 'Lic.Contabilidad y Finanzas',
    text: `Esp.C Económica<br><br>..."Me gusta trabajar en focada en la calidad de mi trabajo, nunca dejo nada para mañana!...`,
  },
];
//************************************************************************************************************************************************************** */

// ********** slider-team ************
const sliderContainer = document.querySelector('.slider-container')
const nextBtn = document.querySelector('.slider-next-btn')
const prevBtn = document.querySelector('.slider-prev-btn')
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = 'none'
  prevBtn.style.display = 'none'
}
// if length is 2, add copies of slides
let people = [...data]
if (data.length === 2) {
  people = [...data, ...data]
}
sliderContainer.innerHTML = people.map((person, slideIndex) => {
  const { img, name, job, text } = person;
  let position = 'next-slider';
  if (slideIndex === 0) {
    position = 'active-slider';
  }
  if (slideIndex === people.length - 1) {
    position = 'last-slider';
  }
  if (data.length <= 1) {
    position = 'active-slider';
  }
  return `<article class="slider ${position}">
              <img src=${img} class="slider-img" alt="${name}"/>
              <h4>${name}</h4>
              <p class="slider-title">${job}</p>
              <p class="slider-text">${text}</p>
              <div class="quote-icon">
              <i class="fas fa-quote-right"></i>
            </div>
          </article>`;
}).join('');

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector('.active-slider')
  const last = document.querySelector('.last-slider')
  let next = active.nextElementSibling
  if (!next) {
    next = sliderContainer.firstElementChild
  }
  active.classList.remove('active-slider')
  last.classList.remove('last-slider')
  next.classList.remove('next-slider')

  if (type === 'prev') {
    active.classList.add('next-slider')
    last.classList.add('active-slider')
    next = last.previousElementSibling
    if (!next) {
      next = sliderContainer.lastElementChild
    }
    next.classList.remove('next-slider')
    next.classList.add('last-slider')
    return
  }
  active.classList.add('last-slider')
  last.classList.add('next-slider')
  next.classList.add('active-slider')
}
nextBtn.addEventListener('click', () => {
  startSlider()
})
prevBtn.addEventListener('click', () => {
  startSlider('prev')
})





