const departmentNames = ["српски", "енглески", "немачки", "шпански", "француски", "италијански"];

const dropdown = document.getElementById("dynamicDropdown");

departmentNames.forEach((deptName) => {
    const option = document.createElement("option");
    option.value = deptName; 
    option.textContent = deptName; 
    dropdown.appendChild(option);
});