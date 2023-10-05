const reviews = [
  {
    imageUrl: "https://picsum.photos/400",
    author: "Jasmine Albani",
    job: "Astrophysicienne",
    description:
      "Jasmine Albani : Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imageUrl: "https://picsum.photos/400",
    author: "Elodie Dupond",
    job: "Développeuse web",
    description:
      "Elodie Dupond : Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    imageUrl: "https://picsum.photos/200",
    author: "Jane Doe",
    job: "Parachutiste",
    description:
      "Jane Doe : Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

const imageElt = document.getElementById("image");
const authorElt = document.getElementById("author");
const jobElt = document.getElementById("job");
const descriptionElt = document.getElementById("description");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentReviewIndex = 0;

function displayReview(currentReview) {
  imageElt.src = currentReview.imageUrl;
  authorElt.innerHTML = currentReview.author;
  jobElt.innerHTML = currentReview.job;
  descriptionElt.innerHTML = currentReview.description;
}

function prevReview() {
  if (currentReviewIndex > 0) {
    currentReviewIndex -= 1;
  } else {
    currentReviewIndex = reviews.length - 1;
  }
  displayReview(reviews[currentReviewIndex]);
}

function nextReview() {
  if (currentReviewIndex < reviews.length - 1) {
    currentReviewIndex += 1;
  } else {
    currentReviewIndex = 0;
  }
  displayReview(reviews[currentReviewIndex]);
}

prevBtn.addEventListener("click", prevReview);
nextBtn.addEventListener("click", nextReview);

displayReview(reviews[currentReviewIndex]);
