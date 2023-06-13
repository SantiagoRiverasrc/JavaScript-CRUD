import { saveTask, getTask, UpdateTask } from "./base.js";

const form = document.getElementById('form-content');
const contentTask = document.getElementById('task_list')




window.addEventListener('DOMContentLoaded', async() => {
     UpdateTask((query) => {
        let str = ''

        query.forEach(doc => {
            const taskData = doc.data();
            str += 
            `
            <div>
                <h3>${taskData.title}</h3>
                <p>${taskData.description}</p>
            </div>
            
            `
    
            
        });

        contentTask.innerHTML = str;

    });
});




form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = form['title']
    const description = form['descrip']

    saveTask(title.value, description.value);

    form.reset();
})

