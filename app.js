// local reviews data
const reviews = [
  {
    id: 0,
    name: "sara jones",
    job: "ux designer",
    img: "person-1.jpeg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
  },
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "person3.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// SELECTORS
let currentItem = 0;
const img = document.getElementById("person-img");
const auther = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

function increaseFunc() {
  if (currentItem < reviews.length - 1) {
    currentItem++;
  } else {
    currentItem = 0;
  }
  console.log(currentItem);
}

function decreaseFunc() {
  if (currentItem > 0) {
    currentItem--;
  } else {
    currentItem = reviews.length - 1;
  }
  console.log(currentItem);
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    increaseFunc();
  }
  if (e.key === "ArrowLeft") {
    decreaseFunc();
  }
});
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("next-btn")) {
    increaseFunc();
  } else if (e.target.classList.contains("prev-btn")) {
    decreaseFunc();
  } else if (e.target.classList.contains("random-btn")) {
    let randomNum = Math.floor(Math.random() * reviews.length - 1);
    currentItem = randomNum;
  }
});

setInterval(() => {
  const item = reviews[currentItem];
  img.src = item.img;
  auther.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}, 1);
