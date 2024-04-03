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
  footerButtonsArray: ['Go', 'Home', 'Home', 'Home', 'Home', 'Home'],
};

let visibleHeading = document.createElement('h2');
let visibleBodyButton = document.createElement('button');
let visibleInstructions = document.createElement('p');
let visibleSubNote = document.createElement('p');
let footerButton = document.createElement('button');

let pages = {
  template(
    headingVisible,
    bodyButtonVisible,
    instructionsVisible,
    subNoteVisible,
    headingContent,
    bodyButtonContent,
    instructionsContent,
    subNoteContent,
    footerButtonContent,
    whereBodyButtonGoes,
    whereFooterButtonGoes
  ) {
    if (headingVisible) {
      visibleHeading.textContent = headingContent;
      document.body.appendChild(visibleHeading);
    }
    if (bodyButtonVisible) {
      visibleBodyButton.textContent = bodyButtonContent;
      visibleBodyButton.addEventListener('click', () => {
        whereBodyButtonGoes();
      });
      document.body.appendChild(visibleBodyButton);
    }
    if (instructionsVisible) {
      visibleInstructions.textContent = instructionsContent;
      document.body.appendChild(visibleInstructions);
    }
    if (subNoteVisible) {
      visibleSubNote.textContent = subNoteContent;
      document.body.appendChild(visibleSubNote);
    }
    footerButton.textContent = footerButtonContent;
    footerButton.addEventListener('click', () => {
      whereFooterButtonGoes();
    });
    document.body.appendChild(footerButton);
  },
  pageOne() {
    pages.template(
      true,
      false,
      false,
      false,
      pagesContents.headingsArray[0],
      pagesContents.bodyButtonsArray[0],
      pagesContents.instructionsArray[0],
      pagesContents.subNotesArray[0],
      pagesContents.footerButtonsArray[0],
      undefined,
      pages.pageTwo
    );
  },
  pageTwo() {
    pages.template(
      true,
      true,
      true,
      false,
      pagesContents.headingsArray[1],
      pagesContents.bodyButtonsArray[1],
      pagesContents.instructionsArray[1],
      pagesContents.subNotesArray[1],
      pagesContents.footerButtonsArray[1],
      pages.pageThree
    );
  },
  pageThree() {
    pages.template(
      true,
      true,
      true,
      true,
      pagesContents.headingsArray[2],
      pagesContents.bodyButtonsArray[2],
      pagesContents.instructionsArray[2],
      pagesContents.subNotesArray[2],
      pagesContents.footerButtonsArray[2],
      pages.pageFour
    );
  },
  pageFour() {
    pages.template(
      true,
      true,
      true,
      true,
      pagesContents.headingsArray[3],
      pagesContents.bodyButtonsArray[3],
      pagesContents.instructionsArray[3],
      pagesContents.subNotesArray[3],
      pagesContents.footerButtonsArray[3],
      pages.pageFive
    );
  },
  pageFive() {
    pages.template(
      true,
      true,
      true,
      true,
      pagesContents.headingsArray[4],
      pagesContents.bodyButtonsArray[4],
      pagesContents.instructionsArray[4],
      pagesContents.subNotesArray[4],
      pagesContents.footerButtonsArray[4],
      pages.pageSix
    );
  },
  pageSix() {
    pages.template(
      true,
      false,
      true,
      true,
      pagesContents.headingsArray[5],
      pagesContents.bodyButtonsArray[5],
      pagesContents.instructionsArray[5],
      pagesContents.subNotesArray[5],
      pagesContents.footerButtonsArray[5]
    );
  },
};

pages.pageOne();

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
