// ~~~~~~~~~~~~~~~~~~~~~~~API~~~~~~~~~~~~~~~~~~~~~~~
const Api = (() =>{
    const URL = 'http://localhost:3000';
    const path = 'todos';

    const getTodos = async () =>{
        const response = await fetch([URL, path].join("/"));
        return await response.json();
    };  

    const deleteTodo = (id) =>
         fetch([URL,path,id].join('/'),{
            method:"DELETE"
         });
    
    const addTodo = async (todo) =>{
        const response = await fetch([URL,path].join('/'),{
            method:"POST",
            body:JSON.stringify(todo),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        return await response.json()
    }
    
    return{
        getTodos,
        deleteTodo,
        addTodo
    }
})();

// ~~~~~~~~~~~~~~~~~~~~~~~View~~~~~~~~~~~~~~~~~~~~~~~
const View = (()=>{
    const domstr = {
        pendingTodoList:"#pending-todo-list",
        completedTodoList:"#completed-todo-list",
        deleteBtn:".delete",
        todoItem:".item",
        todoEdit:".edit",
        todoMove:".move"
    }
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `
                <li class=item>
                    <div>
                        ${todo.content}
                        <button class=move>></button>
                        <button class=delete id="${todo.id}">X</button>
                        <button class=edit>/</button>
                    </div>
                    
                </li>
            `;
        });
        return tmp;
    };
    return {
        render,
        createTmp,
        domstr,
    };
})();
// ~~~~~~~~~~~~~~~~~~~~~~~Model~~~~~~~~~~~~~~~~~~~~~~~
const Model = ((api,view)=>{
    const getTodos = api.getTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;
    class Todo{
        constructor(content) {
            this.id=5;
            this.content=content;
            this.completed=false;
            //console.log(Object.keys(getTodos().shareInfo[0]).length)
        }
    }
    class State {
        #pendingTodolist = [];
        #completedTodoList = [];
        #todoList = [this.#pendingTodolist,this.#completedTodoList]
        get todoList() {
            return this.#todoList;
        }
        set todoList(newtodos) {
            this.#todoList = newtodos
            this.#pendingTodolist = [...this.#todoList[0]];

            const container = document.querySelector(view.domstr.pendingTodoList);
            const tmp = view.createTmp(this.#pendingTodolist);
            view.render(container, tmp);

            this.#completedTodoList = [...this.#todoList[1]];

            const container1 = document.querySelector(view.domstr.completedTodoList);
            const tmp1 = view.createTmp(this.#completedTodoList);
            view.render(container1, tmp1);
        }
    }
    // class completedState {
    //     #completedTodoList = [];
    //     get completedTodolist() {
    //         return this.#completedTodoList;
    //     }
    //     set completedTodoList(newtodos) {
    //         this.#completedTodoList = [...newtodos];

    //         const container = document.querySelector(view.domstr.pendingTodoList);
    //         const tmp = view.createTmp(this.#completedTodoList);
    //         view.render(container, tmp);
    //     }
    // }
    return{
        addTodo,
        getTodos,
        deleteTodo,
        Todo,
        State
    }
})(Api,View);
// ~~~~~~~~~~~~~~~~~~~~~~~Controller~~~~~~~~~~~~~~~~~~~~~~~
const Controller = ((model,view)=>{

    const state = new model.State();
    const addTodo =()=>{
        const newtodo = new model.Todo("Goodbye");
        console.log(newtodo)
        model.addTodo(newtodo).then((todo) => {
            console.log(newtodo)
            state.todolist = [todo, ...state.pendingTodolist];
        });
    }
    const init = () => {
        model.getTodos().then((todos) => {
            let pendingArr = []
            todos.forEach((todo)=>{
                if(todo.isCompleted === true){
                    pendingArr.push(todo)
                }
            })
            let completedArr = []
            todos.forEach((todo)=>{
                if(todo.isCompleted === false){
                    completedArr.push(todo)
                }
            })
            let temp = [pendingArr,completedArr]
            state.todoList = temp
            
        });
    };
    const bootstrap = () => {
        init();
        //deleteTodo();
        //addTodo();
        
    };
    return {
        bootstrap,
    }
})(Model,View);

Controller.bootstrap()
