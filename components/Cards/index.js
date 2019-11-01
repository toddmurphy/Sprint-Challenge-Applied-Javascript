// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//Main parent to append 'lambdaCard'
const cards = document.querySelector('.cards-container');

//axios get request

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // console.log(response);
    response.data.articles.bootstrap.forEach(item => {
      cards.appendChild(lambdaCard(item));
    });
    response.data.articles.javascript.forEach(item => {
      cards.appendChild(lambdaCard(item));
    });
    response.data.articles.jquery.forEach(item => {
      cards.appendChild(lambdaCard(item));
    });
    response.data.articles.node.forEach(item => {
      cards.appendChild(lambdaCard(item));
    });
    response.data.articles.technology.forEach(item => {
      cards.appendChild(lambdaCard(item));
    });
  })
  .catch(error => {
    console.log(error);
  });

//create 'lambdaCard' functional component
function lambdaCard(data) {
  // console.log(data);
  //Create elements
  const card = document.createElement('div'); //main parent we append all elements -> need to return card
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement('span');

  //Set up structure of elements to '.appendChild'
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(image);

  //Set up class names
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  image.classList.add('img');
  authorName.classList.add('span');

  //Set up textContent -> to pass data down to from 'lambdaCard' -> from the axios data set
  headline.textContent = data.headline;
  authorName.textContent = data.authorName;
  image.src = data.authorPhoto;

  // console.log(card);
  return card;
} //This closes lambdaCard component
