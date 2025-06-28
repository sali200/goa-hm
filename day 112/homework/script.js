const input = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []
render()

addBtn.onclick = () => {
  const text = input.value.trim()
  if (text) {
    tasks.push({ text })
    input.value = ''
    save()
  }
}

function render() {
  taskList.innerHTML = ''
  tasks.forEach((task, i) => {
    const li = document.createElement('li')

    const span = document.createElement('span')
    span.textContent = task.text

    const edit = document.createElement('button')
    edit.textContent = 'Edit'
    edit.onclick = () => {
      const newInput = document.createElement('input')
      newInput.type = 'text'
      newInput.value = task.text

      const saveBtn = document.createElement('button')
      saveBtn.textContent = 'Save'
      saveBtn.onclick = () => {
        tasks[i].text = newInput.value
        save()
      }

      li.innerHTML = ''
      li.appendChild(newInput)
      li.appendChild(saveBtn)
    }


    const del = document.createElement('button')
    del.textContent = 'X'
    del.onclick = () => {
      tasks.splice(i, 1)
      save()
    }

    li.appendChild(span)
    li.appendChild(edit)
    li.appendChild(del)
    taskList.appendChild(li)
  })
}


function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
  render()
}