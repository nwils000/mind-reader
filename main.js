let pages = {
  pageOne() {},
  pageTwo() {},
  pageOne() {},
  pageOne() {},
  pageOne() {},
  pageOne() {},
};

/*

HTML STRUCTURE

  <body>
    <div id="content-container" class="container">
      <h2 id="heading"></h2>
      <button class="body-button"></button>
      <p class="instructions"></p>
      <button class="footer-button"></button>
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
