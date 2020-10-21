function addProjectForm(index, Project) {
    const projectContent = document.querySelector("#project-detail");

    const newForm = document.createElement("form");
    newForm.id = "editForm"
    newForm.dataset.index = index;

    const projectTitle = document.createElement("input");
    if (Project) {
        projectTitle.value = Project.title;
    } else {
        projectTitle.value = "New Project";
    }
    projectTitle.id = "project-title";
    projectTitle.type = "text";
    projectTitle.autocomplete = "off";

    const duedatecontainer = document.createElement("div");
    duedatecontainer.id = "duedatecontainer";
    const duedatelabel = document.createElement("label");
    duedatelabel.classList.add("duedatestyle");
    duedatelabel.for = "duedatetime";
    const duedatecontent = document.createElement("input");
    duedatecontent.classList.add("duedatestyle");
    duedatecontent.id = "duedatecontent"
    duedatecontent.name = "duedatetime";
    duedatecontent.type = "datetime-local";
    duedatecontainer.appendChild(duedatelabel);
    duedatecontainer.appendChild(duedatecontent);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.id = "descriptioncontainer";
    const descriptionHeader = document.createElement("h2");
    descriptionHeader.classList.add("sectiondescription");
    const descriptionBox = document.createElement("textarea");
    descriptionBox.rows = "10";
    descriptionBox.id = "descriptioncontent";
    if (Project) {
        descriptionBox.value = Project.description;
    }
    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(descriptionBox);


    const checklistdiv = document.createElement("div");
    const checklistDescription = document.createElement("h2");
    checklistDescription.classList.add("sectiondescription");
    const checklistul = document.createElement("ul");
    checklistul.id = "checkul";
    const addCheckList = document.createElement("input");
    addCheckList.id = "checklistadd";
    addCheckList.type = "text";
    addCheckList.autocomplete = "off";
    addCheckList.placeholder = "Type in Task... (Press Enter To Add Task)"

    if (Project) {
        const taskList = Project.checkList;
        for (const currTask of taskList) {
            const currTaskContainer = document.createElement("div");
            currTaskContainer.classList.add("checklistcontainer");

            const currTaskContent = document.createElement("li");
            currTaskContent.classList.add("checklistitem");
            currTaskContent.textContent = currTask.getValue();
            if (currTask.isFinished()) {
                currTaskContent.classList.add("checklistcomplete");
            }
            const taskIcons = document.createElement("div");
            taskIcons.classList.add("checklisticons");

            const doneIcon = document.createElement("img");
            doneIcon.classList.add("checklisticon");
            doneIcon.src = "./icons/done_outline-white-48dp.svg";
            doneIcon.addEventListener("click", () => {
                currTaskContent.classList.toggle("checklistcomplete");
                currTask.invertFinished();
            });

            const trashIcon = document.createElement("img");
            trashIcon.addEventListener("click", () => {
                const currTaskContainer = trashIcon.parentNode.parentNode;
                var index = Array.prototype.indexOf.call(checklistul.children, currTaskContainer);
                Project.checkList.splice(index, 1);
                checklistul.removeChild(currTaskContainer);
            })
            trashIcon.classList.add("checklisticon");
            trashIcon.src = "./icons/delete-white-48dp.svg";

            taskIcons.appendChild(doneIcon);
            taskIcons.appendChild(trashIcon);

            currTaskContainer.appendChild(currTaskContent);
            currTaskContainer.appendChild(taskIcons);
            checklistul.appendChild(currTaskContainer);
        }
    }

    checklistdiv.appendChild(checklistDescription)
    checklistdiv.appendChild(addCheckList);
    checklistdiv.appendChild(checklistul);

    newForm.appendChild(projectTitle);
    newForm.appendChild(duedatecontainer);
    newForm.appendChild(descriptionContainer);
    newForm.appendChild(checklistdiv);

    projectContent.appendChild(newForm);
}

export default addProjectForm;