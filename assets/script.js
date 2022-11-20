
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.length ==  0){
        alert("Please  Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newTask input').value}
            </span>
            <button class="delete">
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        </div>
        `;


        let  current_task = document.querySelectorAll('.delete');
        for(let i=0; i < current_task.length ; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }


        let tasks = document.querySelectorAll(".task");
        for(let i =0; i < tasks.length ; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('done'); 
            }
        }

        document.querySelector('#newTask input').value = "" ;
    }
}

