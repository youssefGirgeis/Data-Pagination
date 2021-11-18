/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

let numberOfButtons = 0;

const header = document.querySelector(".header");
const paginationList = document.querySelector(".link-list");
const studentList = document.createElement("ul");

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

const showPage = (page, students) => {
  studentList.innerHTML = "";
  let start = page * 9 - 9;
  let end = page * 9;

  if (end > students.length) end = students.length;

  for (let i = start; i < end; i++) {
    const li = document.createElement("li");
    const studentDetailsDiv = document.createElement("div");
    const joinedDetailsDiv = document.createElement("div");
    const image = document.createElement("img");
    const h3 = document.createElement("h3");
    const email = document.createElement("span");
    const joinedDate = document.createElement("span");

    studentList.classList.add("student-list");
    li.classList.add("student-item", "cf");
    studentDetailsDiv.classList.add("student-details");
    joinedDetailsDiv.classList.add("joined-details");
    image.setAttribute("alt", "Profile Picture");
    image.classList.add("avatar");
    email.classList.add("email");
    joinedDate.classList.add("date");

    image.src = `${students[i].picture.large}`;
    studentDetailsDiv.appendChild(image);
    h3.textContent = `${students[i].name.first} ${students[i].name.last}`;
    studentDetailsDiv.appendChild(h3);
    email.textContent = `${students[i].email}`;
    joinedDate.textContent = `Joined ${students[i].registered.date}`;
    joinedDetailsDiv.appendChild(joinedDate);
    studentDetailsDiv.appendChild(email);
    li.appendChild(studentDetailsDiv);
    li.appendChild(joinedDetailsDiv);
    studentList.appendChild(li);
  }
  header.insertAdjacentElement("afterend", studentList);
};

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (students) => {
  paginationList.innerHTML = "";
  numberOfButtons = Math.ceil(students.length / 9);

  for (let i = 1; i <= numberOfButtons; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = i;
    if (i === 1) button.classList.add("active");
    li.appendChild(button);
    paginationList.appendChild(li);
  }
  let activeButton = paginationList.firstElementChild.firstElementChild;
  paginationList.addEventListener("click", (e) => {
    if (e.target.type === "button") {
      activeButton.classList.toggle("active");
      showPage(e.target.textContent, students);
      e.target.classList.add("active");
      activeButton = e.target;
    }
  });
};

// Call functions
createSearchBar();
showPage(1, data);
addPagination(data);

let searchedName = "";
let filteredList = [];
const inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup", (e) => {
  filteredList = [];
  if (e.key.length === 1) searchedName += e.key;
  else if (e.key === "Backspace") searchedName = inputSearch.value;
  for (const student of data) {
    if (
      student.name.first.toLowerCase().includes(searchedName.toLowerCase()) ||
      student.name.last.toLowerCase().includes(searchedName.toLowerCase())
    ) {
      filteredList.push(student);
    }
  }
  showPage(1, filteredList);
  addPagination(filteredList);
});
