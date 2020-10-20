import addProjectForm from "./displayproject"

const projectList = [];

function Project(title, description, dueDate, checkList) {
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

    this.addToCheckList = (checkListItem) => {
        this.checkList.push(checkListItem);
    }
}

function checkListItem(value) {
    this.value = value;
    this.finished = false;

    this.invertFinished = () => {
        this.finished = !(this.finished)
    }

    this.getValue = () => {
        return this.value;
    }

    this.isFinished = () => {
        return this.finished;
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
        const projectIndex = document.querySelector("#project-list-container").childElementCount;
        deleteProjectContent();
        const newTask = new Project("New Project", "", "", []);
        projectList.push(newTask);
        addToProjList();
        addProjectForm(projectIndex);
        addFormEventListener();
    });
}

function deleteProjectContent() {
    const projectContent = document.querySelector("#project-detail");
    while (projectContent.firstChild) {
        projectContent.removeChild(projectContent.firstChild);
    }
}

function addFormEventListener() {
    const currIndex = document.querySelector("form").dataset.index;
    const currentProject = projectList[currIndex];
    const projectTitle = document.querySelector("#project-title");

    projectTitle.addEventListener("keyup", (event) => {
        currentProject.updateTitle(projectTitle.value)
        const currProject = document.querySelector("[data-index=" + "\'" + currIndex + "\'" + "]")
        currProject.textContent = projectTitle.value;
    });

    const duedate = document.querySelector("#duedatecontent");
    duedate.addEventListener("change", () => {
        currentProject.updateDueDate(duedate.value)
    });

    const description = document.querySelector("#descriptioncontent");
    description.addEventListener("keyup", (event) => {
        currentProject.updateDescription(description.value)
    });

    const checklist = document.querySelector("#checklistadd");
    checklist.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            const newCheckListItem = new checkListItem(checklist.value);
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
            doneIcon.addEventListener("click", () => {
                currTaskContent.classList.toggle("checklistcomplete");
                newCheckListItem.invertFinished();
            });

            const trashIcon = document.createElement("img");
            trashIcon.classList.add("checklisticon");
            trashIcon.src = "./icons/delete-white-48dp.svg";
            trashIcon.addEventListener("click", () => {
                const currTaskContainer = trashIcon.parentNode.parentNode;
                var index = Array.prototype.indexOf.call(checklistul.children, currTaskContainer) - 1;
                currentProject.checkList.splice(index, 1);
                checklistul.removeChild(currTaskContainer);
            })

            taskIcons.appendChild(doneIcon);
            taskIcons.appendChild(trashIcon);

            currTaskContainer.appendChild(currTaskContent);
            currTaskContainer.appendChild(taskIcons);
            checklist.appendChild(currTaskContainer);

            checklistul.appendChild(currTaskContainer);
            currentProject.addToCheckList(newCheckListItem);
            checklist.value = "";
            
        }
    });
}

function updateFrontPage() {
    if (projectList.length === 0) {
        const newTask = new Project("New Project", "", "", []);
        projectList.push(newTask);
        addToProjList();
        addProjectForm(0);
        addFormEventListener();
    }
}

function addToProjList() {
    const projectListContainer = document.querySelector("#project-list-container");
    const projectIndex = projectListContainer.childElementCount;

    const newProject = document.createElement("li");
    newProject.textContent = "New Project";
    newProject.classList.add("project-item");
    newProject.dataset.index = projectIndex;
    newProject.addEventListener("click", () => {
        deleteProjectContent();
        addProjectForm(newProject.dataset.index, projectList[newProject.dataset.index]);
        addFormEventListener();
    });
    projectListContainer.appendChild(newProject);
}

function app() {
    updateFrontPage();
    projectListBtn();
    addNewProjectBtn();
}

app();