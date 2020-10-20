function addNewForm(projectIndex) {
    
    const projectContent = document.querySelector("#project-detail");

    const newForm = document.createElement("form");
    newForm.dataset.index = projectIndex;
    newForm.id ="editForm"

    const projectTitle = document.createElement("input");
    projectTitle.value = "New Project";
    projectTitle.id= "project-title";
    projectTitle.type = "text";
    projectTitle.autocomplete = "off";
    projectTitle.required = true;

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
    descriptionBox.id = "descriptioncontent"
    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(descriptionBox);


    const checklistdiv = document.createElement("div");
    const checklistDescription = document.createElement("h2");
    checklistDescription.classList.add("sectiondescription");
    const checklist = document.createElement("ul");
    checklist.id = "checkul"
    const checklistcontainer = document.createElement("div");
    checklistcontainer.classList.add("checklistcontainer");
    const addCheckList = document.createElement("input");
    addCheckList.id = "checklistadd";
    addCheckList.type = "text";
    addCheckList.autocomplete = "off";
    addCheckList.placeholder = "Type in Task... (Press Enter To Add Task)"
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

export default addNewForm;