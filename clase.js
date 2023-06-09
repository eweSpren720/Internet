
		function addTask() {
             const newTaskInput = document.getElementById('newTaskInput');
             const taskSection = document.querySelector('.section');
             const taskId = 'task' + (taskSection.children.length + 1);

            if (newTaskInput.value.trim() === '') {
                alert('Por favor, ingrese una tarea.');
                return;
            }

            const newTask = document.createElement('div');
            newTask.className = 'task';
            newTask.id = taskId;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'checkbox' + (taskSection.children.length + 1);

            const span = document.createElement('span');
            span.textContent = newTaskInput.value;

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'gray-button-container';

            const editButton = document.createElement('button');
            editButton.className = 'gray-button';
            editButton.textContent = 'Editar';
            editButton.onclick = function () {
                editTask(taskId);
            };

            const deleteButton = document.createElement('button');
            deleteButton.className = 'gray-button';
            deleteButton.textContent = 'Eliminar';
            deleteButton.onclick = function () {
            deleteTask(taskId);
            };

            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);

            newTask.appendChild(checkbox);
            newTask.appendChild(span);
            newTask.appendChild(buttonContainer);

            taskSection.appendChild(newTask);

            newTaskInput.value = '';
        }

		function editTask(taskId) {
			const task = document.getElementById(taskId);
			const span = task.querySelector('span');
			const newTaskName = prompt('Ingrese el nuevo nombre de la tarea', span.textContent);

			if (newTaskName) {
				span.textContent = newTaskName;
			}
		}

		function deleteTask(taskId) {
			const task = document.getElementById(taskId);
			task.remove();
		}