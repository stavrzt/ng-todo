import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import { SortTodosPipe } from './pipes/sort-todos.pipe';

const appRoutes: Routes = [
    {path: '', component: TodoListComponent},
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        SortTodosPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
