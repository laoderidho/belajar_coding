
//DOMContentLoaded akan berjalan saat semua event jalan
document.addEventListener('DOMContentLoaded', ()=>{

    const todos = [];
    const RENDER_EVENT = "render-todo";

    const submitForm = document.getElementById('form')
    .addEventListener('submit', (event)=>{
        event.preventDefault()
        addTodo()
    })

    const addTodo= ()=>{
        const textTodo = document.getElementById('title').value
        const date = document.getElementById('date').value

        const generatedID = generatedId()
        const todoObject = generateTodoObject(generatedID, textTodo, date, false)

        todos.push(todoObject)

        document.dispatchEvent(new Event(RENDER_EVENT))

    }

    const generatedId = ()=>{
        return + new Date();
    }

    const generateTodoObject = (id, task, timeStamp, isComplete)=>{
        return{
            id, 
            task, 
            timeStamp,
            isComplete
        }
    } 

    document.addEventListener(RENDER_EVENT, function () {
      console.log(todos);
    });

    const MakeTodo = (todoObject)=>{
         const textTitle = document.createElement("h2");
         textTitle.innerText = todoObject.task;

         const textTimestamp = document.createElement("p");
         textTimestamp.innerText = todoObject.timeStamp;

         const textContainer = document.createElement("div");
         textContainer.classList.add("inner");
         textContainer.append(textTitle, textTimestamp);

         const container = document.createElement("div");
         container.classList.add("item", "shadow");
         container.append(textContainer);
         container.setAttribute("id", `todo-${todoObject.id}`);

         if (todoObject.isCompleted) {
           const undoButton = document.createElement("button");
           undoButton.classList.add("undo-button");

           undoButton.addEventListener("click", function () {
             undoTaskFromCompleted(todoObject.id);
           });

           const trashButton = document.createElement("button");
           trashButton.classList.add("trash-button");

           trashButton.addEventListener("click", function () {
             removeTaskFromCompleted(todoObject.id);
           });

           container.append(undoButton, trashButton);
         } else {
           const checkButton = document.createElement("button");
           checkButton.classList.add("check-button");

           checkButton.addEventListener("click", function () {
             addTaskToCompleted(todoObject.id);
           });

           container.append(checkButton);
         }

         return container;
    }

    document.addEventListener(RENDER_EVENT, ()=>{
        const uncompletedTODOList = document.getElementById("todos");
        uncompletedTODOList.innerHTML = "";
 
        const completedTODOList = document.getElementById("completed-todos");
        completedTODOList.innerHTML = "";

        for (const todoItem of todos) {
            const todoElement = MakeTodo(todoItem);
            if (!todoItem.isCompleted) {
              uncompletedTODOList.append(todoElement);
            }else{
                completedTODOList.append(todoElement);
            }
          }
    })

    function addTaskToCompleted(todoId) {
      const todoTarget = findTodo(todoId);

      if (todoTarget == null) return;

      todoTarget.isCompleted = true;
      document.dispatchEvent(new Event(RENDER_EVENT));
    }

    function findTodo(todoId) {
      for (const todoItem of todos) {
        if (todoItem.id === todoId) {
          return todoItem;
        }
      }
      return null;
    }

    function removeTaskFromCompleted(todoId) {
      const todoTarget = findTodoIndex(todoId);

      if (todoTarget === -1) return;

      todos.splice(todoTarget, 1);
      document.dispatchEvent(new Event(RENDER_EVENT));
    }

    function undoTaskFromCompleted(todoId) {
      const todoTarget = findTodo(todoId);

      if (todoTarget == null) return;

      todoTarget.isCompleted = false;
      document.dispatchEvent(new Event(RENDER_EVENT));
    }

    function findTodoIndex(todoId) {
      for (const index in todos) {
        if (todos[index].id === todoId) {
          return index;
        }
      }

      return -1;
    }
})