import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {NgxEchartsModule} from 'ngx-echarts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemRef: AngularFireObject<any>;
  manpro: Observable<any>;
  constructor(
    public db: AngularFireDatabase,
    public navCtrl: NavController,
  ) {
    this.itemRef = db.object('manpro');
    this.manpro = this.itemRef.valueChanges();
  }
  save(newCl: string, newCs: string, newLight: number, newSound: number) {
    this.itemRef.set({ command_light: newCl,  command_sound: newCs, light: newLight, sound: newSound});
  }
  update(newSize: string) {
    this.itemRef.update({ size: newSize });
  }
  delete() {
    this.itemRef.remove();
  }

  
}
