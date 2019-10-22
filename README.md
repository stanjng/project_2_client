# Stan J. Project 2

## Description
Smoothies are delicious and nutricious way to obtain the daily necessary vitamins, nutrients, and macromolecules that one needs for a healthy functioning body. The sMoo (title pending) application can store your very own unique smoothie creations with 6 essential components to the perfect shake: a base, fruit, veggies, thickeners, and boosters! Each use can create an account to store their own recipes, and each can be saved and deleted at will.

## Front End
[Deployed Client](https://stanjng.github.io/project_2_client/)
[Repository](https://stanjng.github.io/project_2_client/)

## List of Technologies
- Javascript
- HTML
- CSS
- jQuery
- Bootstrap
- Handlebars

## Planning
I started with user stories to determine what I wanted to experience on this sort of application. I established the authentication protocols before moving on to CRUD functionalities. I concurrently styled the page using bootstrap and handlebars based on my goals from the user stories. The most difficult portions involved keeping track of the different modals that appeared and ensuring that each button has appropriate functionalities. In addition, it was difficult determining how to extract the id numbers required to make GET/DELETE/PATCH requests when each modal is technically separate from the data-containing forms, so I could not connect a lot of the forms to methods I had already created. It was most important that this was a full featured site that included a clean, user-friendly interface.

## User Stories
1. As a user, I would like to be able to sign up for the application using an email, password, and password verification.
2. As a user, I would like to be able to sign in using an email and password.
3. As a user, I would like to be able to change my password using my old password and new password.
4. As a user, I would like to be able to change my password when signed in but not when signed out.
5. As a user, I would like to be able to sign out of the application.
6. As a user, I would like a form to appear with authentication options upon clicking a button.
6. As a user, I would like to be able to click a button to send my actions to the api.
7. As a user, I would like to be able to receive a confirmation of my action success or failure.
8. As a user, I would like my forms to clear upon clicking the corresponding submit button to make my request.
9. As a user, I would like to be able to navigate between creating vs reviewing stored smoothie recipes.
10. As a user, I would like the create smoothie function to present forms that allow me to enter in recipe details.
11. As a user, I would like to create and save a smoothie with the data: name:string, base:string, fruit:string, vegetable:string, thickener:string, and boosters:string.
13. As a user, I would like to be able to delete recipes.
14. As a user, I would like to be able to update recipes.
15. As a user, I would like a form to appear to create/make changes upon clicking.

## Dev Process & Problem Solving
I started each functionality with a user story and how I the function to appear on the screen each time with the priority of ease in mind. I would build out the form and test each step of it on the client side. I would build the form & button, test out it's connection to the application, and then I would go through each step of the modules events, api, and ui to ensure each step of the process is accounted for to make fewer mistakes. I would work through the bugs, and if I could not find a proper solution via google, I would find other means to establish similar functionality or find compromise by sticking with what I know at the expense of expectations. I wanted to originally choose each of my recipes to modify using a dropdown but compromised with a selectable form menu that acts similarly to my intentions. I would often revert back to my last functional commit if the changes were too far off from what I wanted to accomplish. Oh, and I asked for a LOT of help from my peers and google overall.

# Future Iterations
sMoo version 1.1 may include preselected ingredients, as if this were more of a realistic shop that had a menu of items. I would like to add a relationship between smoothies and ingredients with the details and benefits of each ingredient appearing as descriptions below the forms. Overall, I would like to clean up the code and condense more of the modals to make it more full featured.

## Wireframes
[Wireframe](https://media.git.generalassemb.ly/user/23009/files/95d91980-f025-11e9-9862-33ffc43cfbf6)

## Entity Relationship Diagram
[ERD](https://media.git.generalassemb.ly/user/23009/files/2d407a00-f0c3-11e9-96d4-17850ee0256b)
