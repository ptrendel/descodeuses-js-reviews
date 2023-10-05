const review = {
  imageUrl: "https://picsum.photos/400",
  author: "Pierre Trendel",
  job: "Développeur / Formateur",
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
};

const imageElt = document.getElementById("image");
const authorElt = document.getElementById("author");
const jobElt = document.getElementById("job");
const descriptionElt = document.getElementById("description");

imageElt.src = review.imageUrl;
authorElt.innerHTML = review.author;
jobElt.innerHTML = review.job;
descriptionElt.innerHTML = review.description;
