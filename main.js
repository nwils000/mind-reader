const state = { currentPage: 1 };

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let icons = {
  pizza: 'url to pizza icon',
  spoon: 'url to spoon icon',
  bowl: 'url to bowl icon',
};

const content = {
  headingsArray: [
    'I can read your mind',
    'Pick a number from 01 - 99',
    'Add both digits together to get a new number',
    'Subtract your new number from the original number',
    loopThroughIcons(),
    icons.pizza,
  ],
  bodyButtonsArray: ['', 'NEXT', 'NEXT', 'NEXT', 'REVEAL', ''],
  instructionsArray: [
    '',
    'When you have your number click next',
    'Ex: 14 is 1 + 4 = 5',
    'Ex: 14 - 5 = 9',
    'Find your new number',
    'Your symbol is:',
  ],
  subNotesArray: [
    '',
    '',
    'click next to proceed',
    'click next to proceed',
    'Note the symbol beside the number',
    icons.pizza,
  ],
  footerButtonsArray: ['Go', 'Home', 'Home', 'Home', 'Home', 'Home'],
};

function loopThroughIcons() {
  let arrayOfIcons = [];
  for (const property in icons) {
    arrayOfIcons.push(icons[property]);
  }
  return arrayOfIcons;
}

function createAndAppendElement(type, parent, content, event) {
  if (content != '') {
    let element = document.createElement(type);
    element.textContent = content;
    if (event) {
      element.addEventListener(event[0], event[1]);
    }
    parent.appendChild(element);
  }
}

function clearPage() {
  container.innerHTML = '';
}

function renderPage() {
  clearPage();
  createAndAppendElement(
    'h2',
    container,
    content.headingsArray[state.currentPage - 1]
  );
  createAndAppendElement(
    'button',
    container,
    content.bodyButtonsArray[state.currentPage - 1],
    [
      'click',
      function () {
        increment();
      },
    ]
  );
  createAndAppendElement(
    'p',
    container,
    content.instructionsArray[state.currentPage - 1]
  );
  createAndAppendElement(
    'p',
    container,
    content.subNotesArray[state.currentPage - 1]
  );
  createAndAppendElement(
    'button',
    container,
    content.footerButtonsArray[state.currentPage - 1],
    [
      'click',
      function () {
        content.footerButtonsArray[state.currentPage - 1] === 'Home'
          ? goHome()
          : increment();
      },
    ]
  );
}

function increment() {
  state.currentPage++;
  renderPage();
}

function goHome() {
  state.currentPage = 1;
  renderPage();
}

renderPage();

/*
DATA
declare a state object and set it to 1
create content object with arrays of different dynamic data such as heading names and button names

Different functions
function to create/append elements

function to clear page

function to render the page (this is where the logic of whatever the state is will declare that index data from each content array)

function to increment state

function to decrement state

function to go home

*/
