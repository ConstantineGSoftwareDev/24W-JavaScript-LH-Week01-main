   /*
    STEP 1: What is JavaScript?

    JavaScript is an interpreted language, rather than a compiled language like C/C++. That is - the code is run in a
    linear
    way, then the result is returned as output of some kind.

    JavaScript can be run either on a server or on a client (like a desktop or phone browser). We will be focused on
    client-side JavaScript.

    JavaScript can do a number of things:
    1. Store information in variables or arrays
    2. Manipulate blocks of text known as 'strings'
    3. Respond to user events
    4. Change content on the page
    5. Modify the CSS styles
    …and much more!

    But it is JavaScript's interaction with Application Programming Interfaces (APIs), that really make things
    interesting
    (and powerful).

    There are two main categories of APIs:
    1. Browser APIs
    2. Third-Party APIs

    Browser APIs allow JavaScript to do things like update the Document Object Model (DOM API), locate the user
    (Geolocation
    API), generate 2D and 3D graphics (Canvas and WebGL APIs), and work with audio and video (Multimedia APIs).
    */

    // STEP 2: Get the EM element and store as a variable
    var Em = document.querySelector("em");
    // STEP 3: Assign a click event listener to the above element, and call function
    Em.addEventListener("click",  displayName);
    // STEP 4: Creat a function that waits for click event above
    function displayName()
    {
        console.log("Inside the Displayname function");
    // STEP 4a: Display a prompt asking for input, and assign the input to a variable
        var userInput = prompt("Enter your name");
        console.log(userInput);
    // STEP 4b: Grab the input from the variable and build a new string, then change the text inside the EM element
    Em.textContent = userInput;
    }