import utils from './utils.js';
import ls from './ls.js';


document.querySelector("#addBtn").onclick = addNewTodo;
document.querySelector("#activefilter").onclick = applyfilter;
document.querySelector("#allfilter").onclick = applyfilter;
document.querySelector("#completedfilter").onclick = applyfilter;

const input = document.querySelector("#todoInput");

input.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewTodo();
})

loadTodos();

function addNewTodo(e) {
    const todo = { id: Date.now(), content: input.value, completed: false };
    input.value = "";
    const todoItem = createTodoItem(todo);
    ls.saveTodo(todo);
    loadTodos();

}
function createTodoItem(todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');

    const todoContent = document.createElement('div')
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;

}
function addToList(todoDiv) {
    document.querySelector('#todos').appendChild(todoDiv);
}
function loadTodos() {
    document.querySelector('#todos').innerHTML = '';
    const todoList = ls.getTodoList();
    
    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addToList(el);
    })
}
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = ' ';
    loadTodos();

}

function applyfilter(e) {

    document.querySelector('#todos').innerHTML = ' ';
    let filterTodos = [];
    const allTodos = ls.getTodoList();

    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos)
    } else if (e.currentTarget.id =='allFilter') {
        filterTodos = allTodos
    }

    filterTodos.forEach( todo => {
        const el = createTodoElement(todo)
        addToList(el)
    })

}