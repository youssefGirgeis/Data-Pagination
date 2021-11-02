/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const header = document.querySelector(".header");
const label = document.createElement("label");
const searchByName = document.createElement("span");
const nameInput = document.createElement("input");
const searchIcon = document.createElement("img");
const searchButton = document.createElement("button");

searchButton.type = "button";
searchIcon.src = "img/icn-search.svg";
searchIcon.alt = "Search icon";
searchButton.appendChild(searchIcon);

label.classList.add("student-search");
searchByName.textContent = "Search by name";
nameInput.setAttribute("id", "search");
nameInput.setAttribute("placeholder", "search by name...");
label.appendChild(searchByName);
label.appendChild(nameInput);
label.appendChild(searchButton);
header.appendChild(label);

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
