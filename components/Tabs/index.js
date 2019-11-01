// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
// const topics = document.querySelector('topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
  console.log(response.data.topics);
  response.data.topics.forEach(item => {
    // console.log(item);
    document.querySelector('topics').appendChild(tabComponent(item));
  });
  //   topics.appendChild(tabComponent(response.data.topics));
});

function tabComponent(data) {
  //create the element
  console.log(data);
  const tab = document.createElement('div');

  //Set up structure of elements

  //Set the class name
  tab.classList.add('tab');

  //Set the text content
  tab.textContent = data;

  //   console.log(tab);
  return tab;
} //This closes tabComponent
