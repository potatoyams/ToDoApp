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
            projectList.style.display = 'flex';
        }
    })
}

function app() {
    //const s = document.querySelector("#descriptionBox");
    //console.log(s);
    //s.addEventListener("keydown", () => {console.log("FUCK")});
    /*
    const s = document.querySelector(".fuck");
    s.addEventListener("click", () => {
        console.log("FUCK");
        s.classList.toggle("toggleCheckList");
    }) 
    */
    projectListBtn();
}

app();