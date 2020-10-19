import addNewForm from "./newproject";
import addProjectForm from "./displayproject"
import addToProjList from "./newprojectlist"

const projectList = [];

function Task(title, description, dueDate, checkList) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.checkList = checkList;

    this.updateTitle = (newTitle) => {
        this.title = newTitle;
    }

    this.updateDescription = (newDescription) => {
        this.description = newDescription;
    }

    this.updateDueDate = (newDueDate) => {
        this.dueDate = newDueDate;
    }
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
        deleteProjectContent();
        const newTask = new Task("", "", "", []);
        projectList.push(newTask);
        addToProjList();
        addNewForm(projectIndex);
        addFormEventListener();
    });
}

function deleteProjectContent() {
    const projectListContainer = document.querySelector("#project-list-container");
        const projectIndex = projectListContainer.childElementCount;
        const projectContent = document.querySelector("#project-detail");
        while (projectContent.firstChild) {
            projectContent.removeChild(projectContent.firstChild);
    }
}

function addFormEventListener() {
    const currIndex = document.querySelector("form").dataset.index;
    const currentTask = projectList[currIndex];
    const projectTitle = document.querySelector("#project-title");

    projectTitle.addEventListener("keyup", (event) => {
        currentTask.updateTitle(projectTitle.value)
        const currProject = document.querySelector("[data-index=" + "\'" + currIndex + "\'" + "]")
        currProject.textContent = projectTitle.value;
    });

    const duedate = document.querySelector("#duedatecontent");
    duedate.addEventListener("change", () => {
        currentTask.updateDueDate(duedate.value)
    });

    const description = document.querySelector("#descriptioncontent");
    description.addEventListener("keyup", (event) => {
        currentTask.updateDescription(projectTitle.value)
    });

    const checklist = document.querySelector("#checklistadd");
    checklist.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            console.log("oy");
            const checklistul = document.querySelector("#checkul");

            const currTaskContainer = document.createElement("div");
            currTaskContainer.classList.add("checklistcontainer");

            const currTaskContent = document.createElement("li");
            currTaskContent.classList.add("checklistitem");
            currTaskContent.textContent = checklist.value;

            const taskIcons = document.createElement("div");
            taskIcons.classList.add("checklisticons");

            const doneIcon = document.createElement("img");
            doneIcon.classList.add("checklisticon");
            doneIcon.src = "./icons/done_outline-white-48dp.svg";

            const trashIcon = document.createElement("img");
            trashIcon.classList.add("checklisticon");
            trashIcon.src = "./icons/delete-white-48dp.svg";

            taskIcons.appendChild(doneIcon);
            taskIcons.appendChild(trashIcon);

            currTaskContainer.appendChild(currTaskContent);
            currTaskContainer.appendChild(taskIcons);
            checklist.appendChild(currTaskContainer);

            checklistul.appendChild(currTaskContainer);
        }
    });
}

function updateFrontPage() {
    if (projectList.length === 0) {
        const newTask = new Task("New Project", "", "", []);
        projectList.push(newTask);
        addToProjList();
        addNewForm(0);
        addFormEventListener();
    }
}

function app() {
    updateFrontPage();
    projectListBtn();
    addNewProjectBtn();
}

app();