import {Component, Input, Output, ChangeDetectionStrategy, EventEmitter} from "@angular/core";
import {SimpleList} from "../../../simplelist/Simplelist";

@Component({
    selector: 'users',
    template: `
        <simple-list
            [list]="data"
            [content]="getContent"
            (current)="current.next($event)"></simple-list>
    `,
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class UsersView {
    @Input() data = {};
    @Output() current:EventEmitter<any> = new EventEmitter();

    getContent(user:any):string { return user.name; }

}
