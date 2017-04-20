$(document).ready(function(){

  // 2. state the variables
  var newRandomInt;
  var randomQuote;
  var author;

  // 1. Create getQuote function
  function getQuote(){

       // A1. Create a function to generate a random number between 0 and 1
       function getRandomInt(min, max) {
       return Math.floor(Math.random() * (max - min + 1)) + min;
       }
       // A2.Create a variable to call the function
       newRandomInt = getRandomInt(0,10);

       // B1. Create an variable Object to store data (quote and author)
       var quoteObject = { quotes: [
       {
         id: 1,
         quote: "All that we are is the result of what we have thought.",
         author: "- Buddha",
       },
       {
         id: 2,
         quote:  "You become what you think about most.. But you also attract what you think about most.",
         author: "- John Assaraf",
       },
       {
         id: 3,
         quote:  "Your power is in your thoughts, so stay awake. In other words, remember to remember.",
         author: "- Rhonda Byrne",
       },
       {
         id: 4,
         quote:  "You create your own universe as you go along.",
         author: "- Winston Churchill",
       },
       {
         id: 5,
         quote:  "Thought impregnated with love becomes invincible.",
         author: "- Charles Haanel",
       },
       {
         id: 6,
         quote:  "Whatsoever ye shall ask in prayer, believing, ye shall receive.",
         author: "- Matthew 21:22",
       },
       {
         id: 7,
         quote:  "Many people who order their lives rightly in all other ways are kept in poverty by their lack of gratitude.",
         author: "- Wallace Wattles",
       },
       {
         id: 8,
         quote:  "Whenever you think you can or think you can’t, either way you are right.",
         author: "- Henry Ford",
       },
       {
         id: 9,
         quote:  "To believe your own thought, to believe that what is true for you in your private heart is true for all men – that is genius.",
         author: "- R.W. Emerson",
       },
       {
         id: 10,
         quote:  "All that we are is a result of what we have thought.",
         author: "- Rhonda Byrne",
       }
     ]
               }

       // B2. create variable to generate quotes and corresponding author
       randomQuote = quoteObject.quotes[newRandomInt].quote;
       author = quoteObject.quotes[newRandomInt].author;

       // C1. create JQuery .text() method to returns quote/author for each corresponding selected element
       $(".quote").text(randomQuote);
       $('.author').text(author);

       // E1. Create tweet feed to share quote and author on Twitter
       $("#tweet").on("click", function(){
       window.open("https://twitter.com/intent/tweet?text=" + randomQuote+" "+author);
         });
   }

     $("#newQuote").on("click", function(){
       getQuote();

   });

});
