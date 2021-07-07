// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//Need to make more clear descriptive names for top level containers such as topicsContainer,
//I had to change this because my data object had the same name  css class name -> topics
const topicsContainer = document.querySelector('.topics');

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
      //   console.log(item); //outputs 'javascript'
      topicsContainer.appendChild(tabComponent(item)); //'javascript' should go here about then go to 'data' in tabComponent(data)
      //   document.querySelector('topics').appendChild(tabComponent(item));
    });
  })
  .catch(error => {
    console.log(error);
  });

function tabComponent(data) {
  // console.log(typeof data);
  //create the element
  const tab = document.createElement('div');

  //Set the class name
  tab.classList.add('tab');

  //Set the text content
  tab.textContent = data;

  //   console.log(tab);
  return tab;
} //This closes tabComponent
