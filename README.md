# Landing-Page_Udacity-Web-Development-professional
Landing Page_Udacity Web Development professional

project title: Landing Page

project structure:
the project contains three files
1. HTML file with name index and it's contains start code
2. CSS file with name styles and it's contains start code
3. JavaScript file with name app

project target:
1. To add links to the created sections dynamiclly.
2. To add anchor to be able to scroll when click.
3. To set active sections
4. Create back to top button and make it smooth to scroll back to top.

project plan:
Generally I tried to avoid repeating my code so I created a set of functions and youe will find clearly in JavaScript file

A) HTML
1. I have to modify the HTML file and add one more section 
2. link the HTML file with the JavaScript file
3. Create the back to top button
4. I added my name in the footer

B) CSS
1. I modified some colors
2. I modified the navigation bar oriantation to be horizontaly in-line block
3. I created the back to top button

C) JavaScript
1. First i have to declare the variables like sections and the unordered list
2. I make a function to loop on the sections and create links named **addNavSections**
3. I make a function to be active listner to the click event named **scrollToAnchor** and using a method called **addEventListener** 
4. I created a help function to be a part of the active element observation called **elemIsActive** I set maximum and minimum values and make a for loop use in it the **getBoundingClientRect** method.
5. I created the main function to set the active section in the viewport named **setActiveView** using methods like **addEventListener** that function loops through the section to make it active when it's in the viewport and unactive the rest.
6. finally i create a function to handle the back to top button.  
