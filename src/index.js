import addNewForm from "./newproject";
import addProjectForm from "./displayproject"

const projectList = [];

function Task(title, description, dueDate, checkList) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.checkList = checkList;
}

function projectListBtn() {
    const burgerBtn = document.querySelector("#nav-container1")
    burgerBtn.addEventListener("click", () => {
        const projectList = document.querySelector("#project-list");
        if (projectList.style.display) {
            if (projectList.style.display === 'flex') {
                projectList.style.display = 'none';
            } else {
                projectList.style.display = 'flex';
            }
        } else {
            projectList.style.display = 'flex';
        }
    })
}

function addNewProjectBtn() {
     const newProjectBtn = document.querySelector("#add-btn");
     newProjectBtn.addEventListener("click", () => {
         const projectContent = document.querySelector("#project-detail");
         while (projectContent.firstChild) {
             projectContent.removeChild(projectContent.firstChild);
         }
         const projectListContainer = document.querySelector("#project-list-container");
         const projectIndex = projectListContainer.childElementCount;

         const newProject = document.createElement("li");
         newProject.textContent = "New Project";
         newProject.classList.add("project-item");
         newProject.dataset.index = projectIndex;
         projectListContainer.appendChild(newProject);

         const newTask = new Task("", "", "",["fuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuckfuck", "my", 'life']);
         projectList.push(newTask);
         addProjectForm(newTask);
         addNewForm(projectIndex);
     })
}

function addFormEventListener() {
    const currentTask = projectList[document.querySelector("form").dataset.index];
    const projectTitle = document.querySelector("#project-title");
    const duedate = document.querySelector("#duedatecontent");
    const description = document.querySelector("#descriptioncontent");
    const checklist = document.querySelector("#checklistadd");
}

function updateFrontPage() {
    if (projectList.length === 0) {
        addNewForm(0);
        addFormEventListener();
    }
}

function app() {
    updateFrontPage();
    projectListBtn();
    addNewProjectBtn();
    addFormEventListener();
}

app();