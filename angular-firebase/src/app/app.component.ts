import { Component } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
items: FirebaseListObservable<any[]>;
  constructor(af:AngularFire){
    this.items =  af.database.list('item'); 
  }

  add(newName: string) {
    this.items.push({ text: newName });
}

}
