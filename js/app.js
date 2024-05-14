// CODE EXPLAINED channel
//select the Elements 

const clear = document.querySelector('clear')
const dateEliment = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')

//classes names    - for controlling the icons when done with to do
const CHECK = 'fa-check-circle'
const UNCHECK = 'fa-circle-thin'
const LINE_THROUGH = 'lineThrough'

// variables
let LIST, id;

//date

//object options
const options = {
    weekday: 'long',
    month: 'short',
    day:'numeric'
 }
const today = new Date()

dateEliment.innerHTML = today.toLocaleDateString('en-US', options)

// to do function
function addToDo(toDo, id, done, trash){

    if(trash){return}

    const DONE = done ? CHECK : UNCHECK
    const LINE = done ? LINE_THROUGH :''
 const item = 
    `<li class="item">
         <i class="fa ${DONE} co" job =" complete" id ="${id}"></i>
         <p class="text ${LINE}">${toDo}</p>
         <i class="fa fa-trash-o de" job =" delete" id ="${id}"></i>
     <li>`

const position = 'beforeend';

list.insertAdjacentHTML(position, item);

}

//add an item to the list using the enter key
document.addEventListener('keyup', function(even){
    if(event.keyCode == 13){
        const toDO = input.value

        //if input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);

            
            LIST.push({
                name: toDo,
                id : id,
                done : false,
                trash : false

            })
            id++
        }
        input.value ='' 
        }
    })

