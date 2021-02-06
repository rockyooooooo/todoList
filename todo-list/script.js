const dateEl = document.getElementById('date');
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input');
const tasksEl = document.getElementById('tasks');


// Remove todo
function deleteTask(todo) {
    todo.remove();
}

// Submit new todo
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(inputEl.value) {
        addTask();
    }
});


// Add new todo
function addTask() {
    const todoEl = document.createElement('li');
    todoEl.innerHTML = `<p>${ inputEl.value }</p><i class="fas fa-ellipsis-h"></i>`;
    tasksEl.appendChild(todoEl);

    // Trying to let the checkbox connect with toggle
    /* const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    todoEl.appendChild(checkboxEl);
    todoEl.innerHTML += `<label>${ inputEl.value }</label>`; */
    
    // Initial the input value
    inputEl.value = '';

    // Left click to complete todo
    todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('complete');

        // Trying to let the checkbox connect with toggle
        /* checkboxEl.checked = !checkboxEl.checked; */
    });

    // Right click to remove todo
    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        deleteTask(todoEl);
    });
}






getDate();

function getDate() {
    const date = new Date();
    const day = date.getDate();
    const weekDay = getWeekStr(date.getDay());
    const month = getMonthStr(date.getMonth());
    const year = date.getFullYear();

    const showDate = `
    <h2>${ weekDay }</h2>
    <h3>${ month } ${ day }, ${ year }</h2>
    `;

    dateEl.innerHTML = showDate;

}

function getWeekStr(weekDay) {
    switch(weekDay) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
    }
}

function getMonthStr(month) {
    switch(month) {
        case 0:
            return 'Jan';
            break;
        case 1:
            return 'Feb';
            break;
        case 2:
            return 'Mar';
            break;
        case 3:
            return 'Apr';
            break;
        case 4:
            return 'May';
            break;
        case 5:
            return 'Jun';
            break;
        case 6:
            return 'Jul';
            break;
        case 7:
            return 'Aug';
            break;
        case 8:
            return 'Sep';
            break;
        case 9:
            return 'Oct';
            break;
        case 10:
            return 'Nov';
            break;
        case 11:
            return 'Dec';
            break;
    }
}