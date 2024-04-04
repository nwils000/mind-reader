const state = { currentPage: 1 };

let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const content = {
  headingsArray: [
    'I can read your mind',
    'Pick a number from',
    'Add both digits together to get a new number',
    'Subtract your new number from the original number',
    '',
    '',
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
    ' ',
    'click next to proceed',
    'click next to proceed',
    'Note the symbol beside the number',
    '',
  ],
  footerButtonsArray: ['Go', 'Home', 'Home', 'Home', 'Home', 'Home'],
};

function displayIcons(faClass, parent) {
  let element = document.createElement('span');
  element.classList.add('fa-solid');
  element.classList.add(faClass);
  parent.appendChild(element);
}

function createAndAppendElement(type, parent, content, event, attributes) {
  if (content != '') {
    let element = document.createElement(type);
    element.textContent = content;
    if (attributes && attributes.length > 0) {
      element.setAttribute(attributes[0][0], attributes[0][1]);
    }
    if (event != null) {
      element.addEventListener(event[0], event[1]);
    }
    parent.appendChild(element);
  }
}

function clearPage() {
  container.innerHTML = '';
}

function addWhichHeadingClass() {
  switch (state.currentPage) {
    case 2:
      return [['class', 'heading-2']];
    default:
      return [['class', 'heading']];
  }
}

function renderPage() {
  clearPage();
  let headingWrapper = document.createElement('div');
  headingWrapper.classList.add('heading-wrapper');
  container.appendChild(headingWrapper);
  if ((state.currentPage = 5)) {
    for (let i = 0; i < 10; i++) {
      displayIcons('fa-pizza-slice', headingWrapper);
      displayIcons('fa-car', headingWrapper);
      displayIcons('fa-house', headingWrapper);
      displayIcons('fa-bell', headingWrapper);
      displayIcons('fa-face-smile', headingWrapper);
      displayIcons('fa-cloud', headingWrapper);
      displayIcons('fa-heart', headingWrapper);
      displayIcons('fa-envelope', headingWrapper);
      displayIcons('fa-phone', headingWrapper);
      displayIcons('fa-magnifying-glass', headingWrapper);
    }
  } else {
    createAndAppendElement(
      'h2',
      headingWrapper,
      content.headingsArray[state.currentPage - 1],
      null,
      addWhichHeadingClass()
    );
  }
  if (state.currentPage === 2) {
    let extraHeadingText = document.createElement('h2', container);
    extraHeadingText.textContent = '01 - 99';
    extraHeadingText.classList.add('extra-heading-text');
    headingWrapper.appendChild(extraHeadingText);
  }
  let buttonTextWrapper = document.createElement('div');
  buttonTextWrapper.classList.add('button-text-wrapper');
  container.appendChild(buttonTextWrapper);

  createAndAppendElement(
    'button',
    buttonTextWrapper,
    content.bodyButtonsArray[state.currentPage - 1],
    [
      'click',
      function () {
        increment();
      },
    ],
    [['class', 'body-button']]
  );
  createAndAppendElement(
    'p',
    buttonTextWrapper,
    content.instructionsArray[state.currentPage - 1],
    null,
    [['class', 'instructions']]
  );
  createAndAppendElement(
    'p',
    buttonTextWrapper,
    content.subNotesArray[state.currentPage - 1],
    null,
    [['class', 'sub-notes']]
  );
  let footerButton = document.createElement('div');
  footerButton.classList.add('footer-button-container');
  container.appendChild(footerButton);
  createAndAppendElement(
    'button',
    footerButton,
    content.footerButtonsArray[state.currentPage - 1],
    [
      'click',
      function () {
        content.footerButtonsArray[state.currentPage - 1] === 'Home'
          ? goHome()
          : increment();
      },
    ],
    [['class', 'footer-button']]
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
