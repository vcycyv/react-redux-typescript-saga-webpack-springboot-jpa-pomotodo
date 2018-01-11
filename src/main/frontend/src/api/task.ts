import 'whatwg-fetch';
import { Task } from '../model';

const url: string = 'http://localhost:8080';

export default class ApiTasks {
     static addTask(task: Task) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return fetch(url + '/pomotodo/tasks', {   
            method: 'POST',
            headers: headers,
            body: JSON.stringify(task)
        }).then((response) => response.json());
    }

    static listTasks() {
        return fetch(url + '/pomotodo/tasks', {   
            method: 'GET'
        }).then((response) => response.json());
    }

    static updateTask(task: Task) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return fetch(url + '/pomotodo/tasks/' + task.id, {   
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(task)
        }).then((response) => response.json());
    }

    static deleteTask(id: string) {
        return fetch(url + '/pomotodo/tasks/' + id, {
            method: 'DELETE'
        })
    }
}