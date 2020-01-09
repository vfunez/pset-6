const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-plus-square-o";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
const EXCLAMATION = "fa-exclamation";
const EXCLAMATION_CIRCLE = "fa-exclamation-circle";

let LIST = []
    , id = 0;

    function addToDo(toDo, id, done, trash){
        if(trash){ return; }
        const DONE = done ? CHECK : UNCHECK;
        const LINE = done ? LINE_THROUGH : "";
        const PRIOR = done ? EXCLAMATION_CIRCLE : EXCLAMATION;
        const item = `<li class="item">
                      <i class="fa ${DONE} co" job="complete" id= "${id}"></i>
                      <p class="text ${LINE}">${toDo}</p>
                      <i class="fa ${PRIOR} po" job="priority" id="${id}"></i>
                      <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                      </li>`;
        const position = "beforeend";
        list.insertAdjacentHTML(position, item);
    }

    document.addEventListener("keyup", function(even){
        if(event.keyCode == 13){
        const toDo = input.value;
        if (toDo) {
          addToDo(toDo, id, false, false, false);
          LIST.push({
            name : toDo,
            id : id,
            done : false,
            trash : false,
            priority : false
          });
          id++;
        }
          input.value = "";
        }
      });

    function completeToDo(element){
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
        LIST[element.id].done = LIST[element.id].done ? false : true;
    }

    function removeToDo(element){
        element.parentNode.parentNode.removeChild(element.parentNode);
        LIST[element.id].trash = true;
    }

    function priorityToDo(element) {
        element = event.target;
        elementParent = element.parentNode;
        removeToDo(element);
        element.classList.toggle(EXCLAMATION);
        element.classList.toggle(EXCLAMATION_CIRCLE);
          if (element.classList.contains(EXCLAMATION_CIRCLE)) {
              list.prepend(elementParent);
          } else if (element.classList.contains(EXCLAMATION)) {
              list.append(elementParent);
          } else {
        }
    };

    list.addEventListener("click", function(event){
        const element = event.target;
        const elementJob = element.attributes.job.value;
          if (elementJob == "complete") {
              completeToDo(element);
          } else if(elementJob == "delete") {
              removeToDo(element);
          } else if(elementJob == "priority") {
              priorityToDo(element);
        }
    });
