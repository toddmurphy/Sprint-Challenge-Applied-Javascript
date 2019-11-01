// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');

// response.data.articles.bootstrap.forEach(item => {
//   cards.appendChild(lambdaCard(item));
// });

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
      console.log(item); //outputs 'javascript'
      topics.appendChild(tabComponent(item)); //'javascript' should go here about then go to 'data' in tabComponent(data)
      //   document.querySelector('topics').appendChild(tabComponent(item));
    });
  })
  .catch(error => {
    console.log(error);
  });

function tabComponent(data) {
  console.log(data);
  //create the element
  //   console.log(data);
  const tab = document.createElement('div');

  //Set up structure of elements

  //Set the class name
  tab.classList.add('tab');

  //Set the text content
  tab.textContent = data.topics;

  //   console.log(tab);
  return tab;
} //This closes tabComponent
