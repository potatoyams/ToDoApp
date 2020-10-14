function Task(title, description, dueDate, priority, notes, checkList) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checkList = checkList;
}

function Project() {
    this.taskList = [];
    function addTask(Task) {
        taskList.append(Task);        
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
            projectList.style.display = 'none';
        }
    })
}

function app() {
    const s = document.querySelector("#project-title")
    s.value = "FUCK"
    s.addEventListener("change", () => {console.log("FUCK")});
    projectListBtn();
}

app();