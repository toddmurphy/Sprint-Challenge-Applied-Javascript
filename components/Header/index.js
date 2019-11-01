// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//Main parent to append 'header
const headerMain = document.querySelector('.header-container');
headerMain.appendChild(Header('March 28, 2019', 'Lambda Times', '98 degrees'));

function Header(dateNow, titleLambda, temperatureToday) {
  //Create elements
  const header = document.createElement('div'); // main element to append other elements
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temperature = document.createElement('span');

  //Set up structure of elements(appendChild)
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temperature);

  //Set up class names
  header.classList.add('header');
  date.classList.add('date');
  title.classList.add('h1');
  temperature.classList.add('temp');

  //Set up text content
  date.textContent = dateNow;
  title.textContent = titleLambda;
  temperature.textContent = temperatureToday;
  console.log(header);
  return header;
}
