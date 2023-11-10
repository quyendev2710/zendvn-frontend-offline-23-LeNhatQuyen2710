let todos = [
    {
        id: self.crypto.randomUUID(),
        name: 'Cras non velit nec nisi vulputate nonummy.',
        status: false,
        level: 1,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Etiam pretium iaculis justo.',
        status: false,
        level: 1,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Nullam varius.',
        status: true,
        level: 1,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Pellentesque viverra pede ac diam.',
        status: true,
        level: 2,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Donec vitae nisi.',
        status: true,
        level: 2,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Vestibulum ante ipsum primis in faucibus orci',
        status: false,
        level: 1,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Maecenas ut massa quis augue luctus tincidunt.',
        status: true,
        level: 3,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Pellentesque at nulla.',
        status: true,
        level: 1,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Nullam molestie nibh in lectus.',
        status: false,
        level: 3,
    },
    {
        id: self.crypto.randomUUID(),
        name: 'Suspendisse ornare consequat lectus.',
        status: true,
        level: 2,
    },
];

// const levelNumber = { 1: 'Dễ', 2: 'Vừa', 3: 'Khó' };
const elInputSearch = document.getElementById('input-search');
const elBtnSearch = document.getElementById('btnSearch');
const elInputSave = document.getElementById('inputSave');
const elLevel = document.getElementById('level');
const elbtnSave = document.getElementById('btnSave');
const elList = document.getElementById('list');
const elTodoForm = document.getElementById('todo-form');
const elStatusFilter = document.getElementById('statusFilter');
const elLevelFilter = document.getElementById('levelFilter');
const elIncreaseName = document.getElementById('increaseName');
const elDecreaseName = document.getElementById('decreaseName');
const elIncreaseLevel = document.getElementById('increaseLevel');
const elDecreaseLevel = document.getElementById('decreaseLevel');


// Hien thi danh sach
renderTodoList(todos);

elTodoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valueName = elInputSave.value;
    console.log(valueName);
    let valueLevel = elLevel.value;
    let newTodo = {
        id: self.crypto.randomUUID(),
        name: valueName,
        status: false,
        level: valueLevel,
    }
    todos.push(newTodo);
    renderTodoList(todos);
    elInputSave.value = '';
});

elBtnSearch.addEventListener('click', function () {
    let valueSearch = elInputSearch.value;
    console.log(valueSearch);
    let searchList = todos.filter(item => item.name.toLowerCase().includes(valueSearch.toLowerCase()));
    renderTodoList(searchList);
});


elList.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('btn-delete')) {
        const idBtnDelete = el.id;
        todos = todos.filter((item) => item.id !== idBtnDelete);
        renderTodoList(todos);
    }
    if (el.classList.contains('todo-name')) {
        const idTodoStatus = el.id;
        const idx = todos.findIndex(item => item.id == idTodoStatus);
        console.log(idx);
        todos[idx].status = !todos[idx].status;
        renderTodoList(todos);
    }

});


elStatusFilter.addEventListener('change', function () {
    let valueStatusFilter = elStatusFilter.value;
    let newTodo = [];
    switch (valueStatusFilter) {
        case "all":
            renderTodoList(todos);
            break;
        case "1":
            newTodo = todos.filter(item => item.status == true);
            renderTodoList(newTodo);
            break;
        case "0":
            newTodo = todos.filter(item => item.status == false)
            renderTodoList(newTodo);
            break;
    }
})

elLevelFilter.addEventListener('change', function () {
    let valueLevelFilter = elLevelFilter.value;
    let newTodo = [];
    switch (valueLevelFilter) {
        case "all":
            renderTodoList(todos);
            break;
        case '1':
            newTodo = todos.filter(item => item.level == 1)
            renderTodoList(newTodo);
            break;
        case '2':
            newTodo = todos.filter(item => item.level == 2)
            renderTodoList(newTodo);
            break;
        case '3':
            newTodo = todos.filter(item => item.level == 3)
            renderTodoList(newTodo);
            break;
    }
})

elIncreaseName.addEventListener('click', function () {
    sortList("name", "asc");
})

elDecreaseName.addEventListener('click', function () {
    sortList("name", "desc");
})

elIncreaseLevel.addEventListener('click', function () {
    sortList("level", "asc");
})

elDecreaseLevel.addEventListener('click', function () {
    sortList("level", "desc");
})


function sortList(sortType, sortDir) {
    let coppyTodos = [...todos];
    switch (sortType) {
        case "name":
            if (sortDir === "asc") {
                coppyTodos.sort((a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                })
                renderTodoList(coppyTodos);
            } else {
                coppyTodos.sort((a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    if (a < b) return 1;
                    if (a > b) return -1;
                    return 0;
                })
                renderTodoList(coppyTodos);
            }
            console.log(coppyTodos);
            break;
        case "level":
            if (sortDir === "asc") {
                coppyTodos.sort((a, b) => {
                    a = a.level;
                    b = b.level;
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                })
                renderTodoList(coppyTodos);
            } else {
                coppyTodos.sort((a, b) => {
                    a = a.level;
                    b = b.level;
                    if (a < b) return 1;
                    if (a > b) return -1;
                    return 0;
                })
                renderTodoList(coppyTodos);
            }
            break;
    }
}

function renderTodoList(list) {
    let htmlTodos = "";
    list.forEach((items) => {
        let completed = items.status ? 'Đã hoàn thành' : "Chưa hoàn thành";
        let level = items.level;
        let levelName = '';
        if (level == 1) {
            levelName = 'Dễ';
        } else if (level == 2) {
            levelName = 'Vừa';
        } else {
            levelName = 'Khó';
        }
        const status = items.status ? 'completed' : '';
        htmlTodos += /* html */`
        <tr>
            <td class="todo-name ${status}" id="${items.id}">${items.name}</td>
            <td>${levelName}</td>
            <td>
                <button>Sửa</button>
                <button class="btn-delete" id="${items.id}">Xoá</button>
            </td> 
        </tr>`
    })
    elList.innerHTML = htmlTodos;
};