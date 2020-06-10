// new code here 
import {
  Component,
  Renderer2,
  NgZone,
  NgModule,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  NavController,
  ModalController,
  LoadingController,
  NavParams,
  Platform
} from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { LiveUpdateProvider } from '../../providers/live-update/live-update';

@Component({
  selector: 'page-tasksdetails',
  templateUrl: 'tasksdetails.html'
})
@NgModule({
  providers: [LiveUpdateProvider]
})
export class TasksdetailsPage {
  @ViewChild('header') headerImage: ElementRef;
  @ViewChild('content') listcontent: ElementRef;
  itemDetails = {};
  viewPlatform: string = '';

  constructor(
    public navCtrl: NavController,
    public dataStore: DataStore,
    public liveUpdateService: LiveUpdateProvider,
    private renderer: Renderer2,
    public navParams: NavParams,
    public platform: Platform
  ) {
    this.itemDetails = navParams.data.itemDetails;
  }
  ngOnInit() {
    let coords = this.navParams.get('coords');
    let imageEle = document.querySelector('.animate-img');
    let bgColor = this.navParams.get('bgColor');
    imageEle.setAttribute('src', this.navParams.get('image'));
    this.renderer.setStyle(this.headerImage.nativeElement, 'width', '24vh');
    this.renderer.setStyle(
      this.headerImage.nativeElement,
      'top',
      `${coords.y}px`
    );
    this.renderer.setStyle(
      this.headerImage.nativeElement,
      'position',
      'absolute'
    );
    this.renderer.setStyle(
      this.headerImage.nativeElement,
      'left',
      `${coords.x}px`
    );
    this.renderer.setStyle(
      this.headerImage.nativeElement,
      'transition',
      '0.5s ease-in-out'
    );
    if (!this.platform.is('core')) {
      this.renderer.setStyle(
        this.listcontent.nativeElement,
        'background',
        bgColor
      );
    }
    // this.renderer.setStyle(this.places.nativeElement, 'background', bgColor);
    setTimeout(() => {
      if (this.platform.is('core')) {
        this.renderer.setStyle(this.headerImage.nativeElement, 'width', '30%');
        this.renderer.setStyle(this.headerImage.nativeElement, 'top', '8rem');
        this.renderer.setStyle(this.headerImage.nativeElement, 'left', '3rem');
      } else {
        this.renderer.setStyle(this.headerImage.nativeElement, 'width', '100%');
        this.renderer.setStyle(this.headerImage.nativeElement, 'top', '0');
        this.renderer.setStyle(this.headerImage.nativeElement, 'left', '0');
      }
    }, 50);
  }
  ionViewWillEnter() {
    if (this.platform.is('core')) {
      this.viewPlatform = 'web';
    } else {
      this.viewPlatform = 'mobile';
    }
  }
  ionViewDidEnter() {
    let bgColor = this.navParams.get('bgColor');
    (<HTMLElement>(
      document.querySelector('.places-container')
    )).style.background = bgColor;
    if (this.platform.is('core')) {
      (<HTMLElement>(
        document.querySelector('.about-container')
      )).style.background = bgColor;
    }
  }
  ionViewDidLoad() {}
}
