let contentContainer = document.querySelector('#content-container');
let heading = document.querySelector('#heading');
let bodyButton = document.querySelector('#body-button');
let instructions = document.querySelector('#instructions');
let subNote = document.querySelector('#sub-note');
let footerButton = document.querySelector('#footer-button');

let icons = {
  pizza: 'url to pizza icon',
  spoon: 'url to spoon icon',
  bowl: 'url to bowl icon',
};

function loopThroughIcons() {
  let arrayOfIcons = [];
  for (const property in icons) {
    arrayOfIcons.push(icons[property]);
  }
  console.log(arrayOfIcons);
  return arrayOfIcons;
}

let pagesContents = {
  headingsArray: [
    'I can read your mind',
    'Pick a number from 01 - 99',
    'Add both digits together to get a new number',
    'Subtract your new number from the original number',
    loopThroughIcons(),
    icons.pizza,
  ],
  bodyButtonsArray: ['', 'NEXT', 'NEXT', 'NEXT', 'REVEAL'],
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
};

let pages = {
  pageOne(headingContent) {
    heading.textContent = headingContent;
    bodyButton.style.display = 'none';
    bodyButton.style.display = 'none';
    subNote.style.display = 'none';
    footerButton.textContent = 'Go';
    footerButton.addEventListener('click', () => {
      pages.pageTwo(
        pagesContents.headingsArray[1],
        pagesContents.bodyButtonsArray[1],
        pagesContents.instructionsArray[1]
      );
    });
  },
  pageTwo(headingContent, bodyButtonContent, instructionsContent) {
    heading.textContent = headingContent;
    bodyButton.style.display = 'block';
    bodyButton.textContent = bodyButtonContent;
    bodyButton.addEventListener('click', () => {
      pages.pageThree(
        pagesContents.headingsArray[2],
        pagesContents.bodyButtonsArray[2],
        pagesContents.instructionsArray[2],
        pagesContents.subNotesArray[2]
      );
    });
    instructions.style.display = 'block';
    instructions.textContent = instructionsContent;
    footerButton.textContent = 'Home';
    footerButton.addEventListener('click', () => {
      pages.pageOne(pagesContents.headingsArray[1]);
    });
  },
  pageThree(
    headingContent,
    bodyButtonContent,
    instructionsContent,
    subNoteContent
  ) {
    heading.textContent = headingContent;
    bodyButton.style.display = 'block';
    bodyButton.textContent = bodyButtonContent;
    instructions.style.display = 'block';
    instructions.textContent = instructionsContent;
    subNote.style.display = 'block';
    subNote.textContent = subNoteContent;
    footerButton.textContent = 'Home';
    footerButton.addEventListener('click', () => {
      pages.pageOne(pagesContents.headingsArray[1]);
    });
  },
  pageFour() {},
  pageFive() {},
  pageSix() {},
};

pages.pageOne(pagesContents.headingsArray[0]);

/*

HTML STRUCTURE

  <body>
    <div id="content-container" class="container">
      <h2 id="heading"></h2>
      <button id="body-button"></button>
      <p id="instructions"></p>
      <button id="footer-button"></button>
    </div>
    <script defer src="./pseudo-code.js"></script>
  </body>

  

MIND READER

    FUNCTIONALITIES

        Has 6 pages

            Each page should be a unique function within an object

        Each page shares a navigator at the bottom that allows the user to cycle through them

        The navigator remembers which page you are on and displays it

        Has the ability to go back home or one page up or one page down

    HOW TO MAKE THESE FUNCTIONALITIES WORK
    
        Have a central storage for each page held within functions (probably an object)

        the navigation functions will have 3 functionalities buttons forward backwards or home
        
            Forward function will take **what page were currently on** and increment it by 1

            Backward function wil take **what page were currently on** and decrement it by 1 

            Home function will set **the page were currently on** to 1
        
        Each page has a CTA either Go, next, reveal that are buttons that will call the forward function
        
        Each page besides the first will have a home button that will call teh home function
*/
