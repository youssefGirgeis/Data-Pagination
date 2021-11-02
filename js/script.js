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
const studentList = document.querySelector(".student-list");

const createSearchBar = () => {
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
};

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (students) => {
  for (const student of students) {
    const li = document.createElement("li");
    const studentDetailsDiv = document.createElement("div");
    const joinedDetailsDiv = document.createElement("div");
    const image = document.createElement("img");
    const h3 = document.createElement("h3");
    const email = document.createElement("span");
    const joinedDate = document.createElement("span");

    li.classList.add("student-item", "cf");
    studentDetailsDiv.classList.add("student-details");
    joinedDetailsDiv.classList.add("joined-details");
    image.setAttribute("alt", "Profile Picture");
    image.classList.add("avatar");
    email.classList.add("email");
    joinedDate.classList.add("date");

    image.src = `${student.picture.large}`;
    studentDetailsDiv.appendChild(image);
    h3.textContent = `${student.name.first} ${student.name.last}`;
    studentDetailsDiv.appendChild(h3);
    email.textContent = `${student.email}`;
    joinedDate.textContent = `Joined ${student.registered.date}`;
    joinedDetailsDiv.appendChild(joinedDate);
    studentDetailsDiv.appendChild(email);
    li.appendChild(studentDetailsDiv);
    li.appendChild(joinedDetailsDiv);
    studentList.appendChild(li);
  }
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
createSearchBar();
showPage(data);
