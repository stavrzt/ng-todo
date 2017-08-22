import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sortTodos',
})
export class SortTodosPipe implements PipeTransform {
    transform(array: any, args: any) {
        array.sort((a: any, b: any) => {
            if (a[args] > b[args]) {
                return 1;
            } else if (a[args] < b[args]) {
                return -1;
            } else {
                return 0;
            }
        });
        console.log(`Array was sorted by ${args}`, array);
        return array;
    }
}
