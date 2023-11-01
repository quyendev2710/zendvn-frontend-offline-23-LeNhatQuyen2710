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


renderTodoList(todos);

elTodoForm.addEventListener('submit', function(e){
    e.preventDefault();
    let valueName = elInputSave.value;
    console.log(valueName);
    let valueLevel = elLevel.value;
    let newTodo = {
        id: self.crypto.randomUUID(),
        name : valueName,
        status : false,
        level: valueLevel,
    }
    todos.push(newTodo);
    renderTodoList(todos);
    elInputSave.value = '';
})

elBtnSearch.addEventListener('click', function(){
    let valueSearch = elInputSearch.value;
    console.log(valueSearch);
    let searchList = todos.filter((item) => {
       return item.name.toLowerCase().includes(valueSearch.toLowerCase());
    });
    renderTodoList(searchList);
})


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
        htmlTodos += /* html */`
        <tr>
            <td>${items.name}</td>
            <td>${completed}</td>
            <td>${levelName}</td>
            <td>
                <button>Sửa</button>
                <button>Xoá</button>
            </td> 
        </tr>`
    })
    elList.innerHTML = htmlTodos;
}

