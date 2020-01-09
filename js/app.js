const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-plus-square-o";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
const NORMAL = "fa-exclamation";
const PRIORITY = "fa-exclamation-circle";

let LIST = []
    , id = 0;

    function addToDo(toDo, id, done, trash){
        if(trash){ return; }
        const DONE = done ? CHECK : UNCHECK;
        const LINE = done ? LINE_THROUGH : "";
        const PRIOR = done ? PRIORITY : NORMAL;
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
