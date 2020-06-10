import { Component, Renderer, NgZone } from '@angular/core';
import { App, NavController, ModalController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public dataStore: DataStore,
    public appCtrl: App,
    public ngZone: NgZone
  ) {}
  username = this.dataStore.username;
  recentTasks = [
    {
      taskName: 'Replace Conveyor Belt',
      priority: 'High',
      dueDate: 'June 11',
      img:
        'https://w0.pngwave.com/png/345/338/conveyor-belt-conveyor-system-lineshaft-roller-conveyor-manufacturing-transport-belt-png-clip-art.png'
    },
    {
      taskName: 'Refill Hydrolic fluid',
      priority: 'Medium',
      dueDate: 'June 14',
      img:
        'https://5.imimg.com/data5/BY/KE/MY-14628762/hydraulic-oil-32-500x500.png'
    }
  ];
}
