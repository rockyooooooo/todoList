const dateEl = document.getElementById('date');
const taskContainerEl = document.getElementById('task-container')
const formEl = document.getElementById('form')
const topEl = document.getElementById('top');
const inputEl = document.getElementById('input');
const tasksEl = document.getElementById('tasks');
const pinIcon = 'fas fa-thumbtack';



function removeFromTop(todoEl, pinBtn, menuEl) {
    tasksEl.appendChild(todoEl);
    pinBtn.innerHTML = `<i class="fas fa-thumbtack"></i>Pin on the top`;
    pinBtn.addEventListener('click', () => {
        // menuEl.classList.toggle('hide');
        pinOnTop(todoEl, pinBtn, menuEl);
    });
}

function pinOnTop(todoEl, pinBtn, menuEl) {
    topEl.appendChild(todoEl);
    // const pin = document.createElement('i');
    // pin.classList.add('fas', 'fa-thumbtack', 'pin');
    // topEl.insertBefore(pin, todoEl);
    pinBtn.innerHTML = `<i class="fas fa-thumbtack"></i>Remove from the top`;
    pinBtn.addEventListener('click', () => {
        // menuEl.classList.toggle('hide');
        removeFromTop(todoEl, pinBtn, menuEl);
    });
}

// Remove todo
function deleteTask(todoEl) {
    todoEl.remove();
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
    const textEl = document.createElement('p');
    const menuBtn = document.createElement('button');
    const menuEl = document.createElement('div');
    const pinBtn = document.createElement('button');
    const addMemoBtn = document.createElement('button');
    const menuArrow = document.createElement('div');

    tasksEl.appendChild(todoEl);
    todoEl.appendChild(textEl);
    todoEl.appendChild(menuBtn);
    todoEl.appendChild(menuEl);
    menuEl.appendChild(pinBtn);
    menuEl.appendChild(addMemoBtn);
    menuEl.appendChild(menuArrow);

    menuBtn.classList.add('menu-btn');
    menuEl.classList.add('menu', 'hide');
    pinBtn.classList.add('pin-btn');
    addMemoBtn.classList.add('add-memo-btn');
    menuArrow.classList.add('menu-arrow');

    textEl.innerText = inputEl.value;
    menuBtn.innerHTML = `<i class="fas fa-ellipsis-h"></i>`;
    pinBtn.innerHTML = `<i class="fas fa-thumbtack"></i>Pin on the top`;
    addMemoBtn.innerHTML = `<i class="fas fa-sticky-note"></i>Add a memo`;



    // Trying to let the checkbox connect with toggle
    /* const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    todoEl.appendChild(checkboxEl);
    todoEl.innerHTML += `<label>${ inputEl.value }</label>`; */
    


    // Initial the input value
    inputEl.value = '';

    // Left click to complete todo
    textEl.addEventListener('click', () => {
        textEl.classList.toggle('complete');



        // Trying to let the checkbox connect with toggle
        /* checkboxEl.checked = !checkboxEl.checked; */
    });

    // Right click to remove todo
    textEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        deleteTask(todoEl);
    });

    // Show menu
    menuBtn.addEventListener('click', () => {
        menuEl.classList.toggle('hide');
    });

    // Pin the task on top
    pinBtn.addEventListener('click', () => {
        menuEl.classList.toggle('hide');
        pinOnTop(todoEl, pinBtn, menuEl);
    });

    // Add a memo to task
    addMemoBtn.addEventListener('click', () => {
        console.log('yo');
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