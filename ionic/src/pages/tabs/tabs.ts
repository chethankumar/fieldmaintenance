import { Component, Renderer } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { TasksPage } from '../tasks/tasks';
import { ChatbotPage } from '../chatbot/chatbot';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = TasksPage;
  tab3Root = ChatbotPage;
  tab4Root = SettingsPage;

  constructor(public navCtrl: NavController, public renderer: Renderer) {}
}
