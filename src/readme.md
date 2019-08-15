![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Software Engineneering Immersive: Project 4

This is my second project during the General Assembly Software Engineering Immersive course (Week 11).
The final project was an opportunity to showcase everything we have learned so far. With the opportunity to work alone and to identify areas for self development.

# QuietPlace

I decided to create a website for people who need to find a “quiet place” to focus on their work or studies, write an essay or simply have a cup of coffee and read a book.
I pseudocode the components  I created - drew the content and made notes of any ideas I came up with during the work.  
I've decided to challenge myself and focus on Python during this project as I haven't had the opportunity to do so before. I really enjoyed working across back-end and front-end to create full-stack application.
Other technologies used in this project were React, React-Scrollable-Anchor, CSS and Bootstrap. I used Flask to provide the API framework and I tested the endpoints using Insomnia.
To make the project more visual, I used Mapbox API to mark each of the place on the map.

## Built With

The application’s backend was created using Python and Flask with a React front-end.


1. SCSS
2. Bootstrap
3. JavaScript ES6 / React.js (Framework)
4. GitHub
5. Python

## Deployment

The app is deployed on Heroku and it can be found here: https://quiet-place-sei41.herokuapp.com/

## Getting Started

Use the clone button to download the game source code. In the terminal enter the following commands:

<!-- to install JavaScript Packages: -->
$ yarn
<!-- to install Python packages: -->
$ pipenv
<!--Then to seed the database: -->
$ pipenv run python seeds.py
<!-- Run the frontend in your localhost: -->
$ yarn serve:front
<!-- Run the backend in your localhost: -->
$ yarn serve:back

## Website Architecture

### Homepage

I decided on having a one single page website, the user lands on when visiting the site.
The Homepage.js component includes five sections, Navbar and Footer.

<img src="src/assets/homepage.png" width="900">





As an improvement, I would like to add a comments wall for each location and a chat to improve the user experience.
