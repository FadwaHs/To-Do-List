
window.addEventListener('load', () =>{




	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");


	form.addEventListener('submit',addtask);
	function addtask(event)
	{

		event.preventDefault();
        const task = input.value;
		if(!task)
		{
			alert(" Please Enter a Task");
			return;
		}

	  const task_el = document.createElement('div');
		task_el.classList.add('task');
		task_el.setAttribute('id','mydivheader');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');


		task_el.appendChild(task_content_el);


		var sidebar = document.createElement("button");
		sidebar.classList.add('openbtn');
    sidebar.innerText = ' ☰ ';

    task_content_el.appendChild(sidebar);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');


    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		var done = document.createElement("button");
		done.classList.add('done');
    done.innerText = 'done';


		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(done);
		
		task_el.appendChild(task_actions_el);
		list_el.appendChild(task_el);


      btn_colors = {

       'hi': 'hiP',
       'med': 'medP',
       'low': 'lowP'
     }

		radios = document.getElementsByName('rgPrior');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         btn_selected_color = (btn_colors[radios[i].value]);
         break;
    }
  }

    task_input_el.className = btn_selected_color;

	

		//Edit
		task_edit_el.addEventListener('click', (e) => {

			if (task_edit_el.innerText.toLowerCase() == "edit") {

				task_edit_el.innerText = "Save";

				task_input_el.removeAttribute("readonly");

				task_input_el.focus();

			} else {

				task_edit_el.innerText = "Edit";

				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		//delete
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

        //done
		done.addEventListener('click', (e) => {

			task_input_el.classList.toggle("completed");
		});



	}


     alert($("#tasks div").length);

})