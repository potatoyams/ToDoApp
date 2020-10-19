/*
        <div id="project-detail">
            <form id="editForm" name="editForm" action="onSave();return false;">
                    <input id="project-title" type="text" autocomplete="off">
                    <div id="duedatecontainer">
                        <label class="duedatestyle" for="duedatetime">Due Date:</label>
                        <input class="duedatestyle" name="duedatetime" type="datetime-local">
                    </div>
                    <div id="descriptioncontainer">
                        <h2 class="sectiondescription">Description:</h2>
                        <textarea rows="10"></textarea>
                    </div>
                    <div>
                        <h2 class="sectiondescription">Checklist:</h2>
                        <ul>
                            <div class="checklistcontainer">
                                <li class="checklistitem">fsdfalkjdsklf;dklasdfsadfsdafsdafsadfsadfsadfsadfsdafdsafsadfsadfsadfsadklasdfsadfsdafsdafsadfsadfsadfsadfsdafdsafsadfsadfsadfsadklasdfsadfsdafsdafsadfsadfsadfsadfsdafdsafsadfsadfsadfsadfdsdafsadf;djsfkl;;djsfkl;ads</li>
                                <div class="checklisticons">
                                    <img class="checklisticon" src="./icons/done_outline-white-48dp.svg" alt="Add Task">
                                    <img class="checklisticon" src="./icons/delete-white-48dp.svg" alt="Add Task">
                                </div>
                            </div>
                        </ul>
                        <input id="checklistadd" type="text" autocomplete="off" placeholder="Type in Task... (Enter To Add Task)">
                    </div>
                </form>
            </div>
        </div>
*/

function addProjectForm(Task) {
    const projectContent = document.querySelector("#project-detail");

    const newForm = document.createElement("form");
    newForm.id = "editForm"

    const projectTitle = document.createElement("input");
    projectTitle.value = Task.title;
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
    descriptionBox.value = Task.description;
    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(descriptionBox);


    const checklistdiv = document.createElement("div");
    const checklistDescription = document.createElement("h2");
    checklistDescription.classList.add("sectiondescription");
    const checklist = document.createElement("ul");
    checklist.id = "checkul";
    const checklistcontainer = document.createElement("div");
    checklistcontainer.classList.add("checklistcontainer");
    const addCheckList = document.createElement("input");
    addCheckList.id = "checklistadd";
    addCheckList.type = "text";
    addCheckList.autocomplete = "off";
    addCheckList.placeholder = "Type in Task... (Press Enter To Add Task)"

    const taskList = Task.checkList;
    for (const currTask of taskList) {
        const currTaskContainer = document.createElement("div");
        currTaskContainer.classList.add("checklistcontainer");

        const currTaskContent = document.createElement("li");
        currTaskContent.classList.add("checklistitem");
        currTaskContent.textContent = currTask;

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
    }

    checklist.appendChild(checklistcontainer);
    checklistdiv.appendChild(checklistDescription)
    checklistdiv.appendChild(addCheckList);
    checklistdiv.appendChild(checklist);

    newForm.appendChild(projectTitle);
    newForm.appendChild(duedatecontainer);
    newForm.appendChild(descriptionContainer);
    newForm.appendChild(checklistdiv);

    projectContent.appendChild(newForm);
}

export default addProjectForm;