function addToProjList() {
    const projectListContainer = document.querySelector("#project-list-container");
    const projectIndex = projectListContainer.childElementCount;

    const newProject = document.createElement("li");
    newProject.textContent = "New Project";
    newProject.classList.add("project-item");
    newProject.dataset.index = projectIndex;
    projectListContainer.appendChild(newProject);
}

export default addToProjList