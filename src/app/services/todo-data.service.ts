import {Injectable} from '@angular/core';

@Injectable()
export class TodoDataService {
    defaultTodoArray = [
        {
            id: 1,
            text: 'Create ToDo app',
        },
        {
            id: 2,
            text: 'Send Todo app to review',
        },
        {
            id: 3,
            text: 'Waiting for feedback',
        }];

    static setLocalStorageData(newArray: any[]) {
        localStorage.setItem('todoData', JSON.stringify(newArray));
    }

    constructor() {
    }

    getLocalStorageData(): any[] {
        const data = localStorage.getItem('todoData');
        if (data) {
            console.log('Data was loaded from localStorage');
            return JSON.parse(data);
        } else {
            console.log('Data was loaded from the default array as localStorage is empty');
            return this.defaultTodoArray;
        }
    }

};


