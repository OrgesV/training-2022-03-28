// ~~~~~~~~~~~~~~~~~~~~~~~View~~~~~~~~~~~~~~~~~~~~~~~
import {View} from "./view.js"
// ~~~~~~~~~~~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~~~~~~~~
import {Model} from "./model.js"
// ~~~~~~~~~~~~~~~~~~~~~~~Controller~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model,view)=>{

    const state = new model.State();
    const addTodo =()=>{
        // const newtodo = new model.Todo("Goodbye");
        // console.log(newtodo)
        // model.addTodo(newtodo).then((todo) => {
        //     console.log(newtodo)
        //     state.todolist[0] = [todo, ...state.pendingTodolist];
        // });

        const inputButton = document.querySelector(view.domstr.inputButton);
        const todoInput = document.querySelector(view.domstr.todoInput)
        inputButton.addEventListener("click", () => {
            //console.log(event.target.value)
            if(todoInput.value != ""){
                const newtodo = new model.Todo(todoInput.value);
                model.addTodo(newtodo).then((todo) => {
                    state.todoList[0] = [todo, ...state.todoList[0]];
                });
                todoInput.value = "";
                init();
            }

        });
    }
    const init = () => {
        model.getTodos().then((todos) => {
            let pendingArr = []
            let completedArr = []
            todos.forEach((todo)=>{
                if(todo.isCompleted === false){
                    pendingArr.push(todo)
                }else{
                    completedArr.push(todo)
                }
            })
            state.todoList = [pendingArr,completedArr]
            
        });
    };
    const updateTodo = () =>{

        const pending = document.querySelector(view.domstr.pendingTodoList);
        const completed = document.querySelector(view.domstr.completedTodoList);
        pending.addEventListener("click",(event)=>{
            if(event.target.classList.contains('delete')){
                state.todoList[0] = state.todoList[0].filter(
                    (todo) => +todo.id !== +event.target.id
                );
                model.deleteTodo(event.target.id);
                init();
            }
            if(event.target.classList.contains('edit')){

            }
            if(event.target.classList.contains('move')){

            }
        })
        completed.addEventListener("click",(event)=>{
            if(event.target.classList.contains('delete')){
                console.log(event.target.id)
                state.todoList[1] = state.todoList[1].filter(
                    (todo) => +todo.id !== +event.target.id
                );
                model.deleteTodo(event.target.id);
                init();
            }
            if(event.target.classList.contains('edit')){
                //let parent = document.querySelector(event.target.parentElement)
                console.log(event.target.parentElement.parentElement)
                let p =document.querySelector(view.pendingTodoList)
                p.body.appendChild(event.target.parentElement.parentElement)
                event.target.parentElement.parentElement.removeChild(event.target.parentElement)
                
            }
            if(event.target.classList.contains('move')){
                console.log(event.target.id)
                //state.todoList[0]
            }
        })


    }
    const bootstrap = () => {
        init();
        //deleteTodo();
        updateTodo();
        addTodo();
        
    };
    return {
        bootstrap,
    }
})(Model,View);

Controller.bootstrap()
