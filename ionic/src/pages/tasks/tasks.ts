// new code here
import { Component, Renderer, NgZone, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import { TasksdetailsPage } from '../tasksdetails/tasksdetails';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public dataStore: DataStore,
    public zone: NgZone
  ) {}
  items: Array<Object> = [
    {
      img:
        'https://banner2.cleanpng.com/20180311/zyw/kisspng-furnace-heater-electric-heating-home-appliance-ele-electric-heater-electric-oil-heater-5aa53550e553a4.4781968715207765289393.jpg',
      heading: 'Repair Furnace',
      subHeading: 'Italy',
      description: 'Priority ::> High',
      reviews: [
        {
          name: 'Andrew Smith',
          review:
            'Cinque terre is one the most beautiful places I have ever visited.'
        },
        {
          name: 'Mark Walter',
          review:
            'The best thing about this place is you can stroll around in the market, no cabs needed.'
        },
        {
          name: 'Wilson',
          review: 'Once is not enough for this place! Such beauty.'
        },
        {
          name: 'Harry',
          review: 'You must visit this on your next trip to Italy!'
        }
      ],
      briefDesc:
        'Cinque Terre is mentioned in documents dating to the 11th century. Monterosso and Vernazza were settled first and the other villages grew later, whilst within the territory of the Republic of Genoa. In the 16th century the inhabitants reinforced existing forts and built new defense towers to defend the area from attacks by the Turks. Cinque Terre experienced economic decline from the 17th to 19th centuries, recovering when an arsenal was built in La Spezia and it gained a railway link to Genoa. The railway led to migration from the area and a decline in traditional industries until the growth of tourism from the 1970s onwards brought some prosperity.'
    },
    {
      img:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Lamneck-central-heating-gas-furnace-cutaway-diagram.png',
      heading: 'Replace Heater',
      subHeading: 'France',
      description: 'Priority :: > Low',
      reviews: [
        {
          name: 'Andrew Smith',
          review: 'Paris is one the most beautiful places I have ever visited.'
        },
        {
          name: 'Mark Walter',
          review:
            'The best thing about this place is you can stroll around in the market, no cabs needed.'
        },
        {
          name: 'Wilson',
          review: 'Once is not enough for this place! Such beauty.'
        },
        {
          name: 'Harry',
          review: 'You must visit this on your next trip to France!'
        }
      ],
      briefDesc:
        "The city is a major railway, highway, and air-transport hub served by two international airports: Paris-Charles de Gaulle (the second busiest airport in Europe) and Paris-Orly. Opened in 1900, the city's subway system, the Paris Métro, serves 5.23 million passengers daily,and is the second busiest metro system in Europe after Moscow Metro. Gare du Nord is the 24th busiest railway station in the world, but the first located outside Japan, with 262 million passengers in 2015."
    },
    {
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY9rB7RKrisbhRkUtPmHy_XsEsDT8Is1l1eIVbM4_JGghvza6A&usqp=CAU',
      heading: 'Furnace maintenance',
      subHeading: 'India',
      description: 'Priority ::> High',
      reviews: [
        {
          name: 'Narayan',
          review:
            'Madurai is one the most beautiful places I have ever visited.'
        },
        {
          name: 'Jay Vijay',
          review:
            'The best thing about this place is you can stroll around in the market, no cabs needed.'
        },
        {
          name: 'Mahesh Nath',
          review: 'Once is not enough for this place! Such beauty.'
        },
        {
          name: 'Vikram Choudhary',
          review: 'You must visit this on your next trip to Madurai!'
        }
      ],
      briefDesc:
        'Madurai is closely associated with the Tamil language, and the third Tamil Sangam, a major congregation of Tamil scholars said to have been held in the city. The recorded history of the city goes back to the 3rd century BCE, being mentioned by Megasthenes, the Greek ambassador to the Maurya empire, and Kautilya, a minister of the Mauryan emperor Chandragupta Maurya.'
    },
    {
      img:
        'https://7brd83qn9we1178e338tvik7-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/stress-relieving-furnace.png',
      heading: 'Lubricate engine',
      subHeading: 'Italy',
      description: 'Priority ::> Low',
      reviews: [
        {
          name: 'Andrew Smith',
          review:
            'Cinque terre is one the most beautiful places I have ever visited.'
        },
        {
          name: 'Mark Walter',
          review:
            'The best thing about this place is you can stroll around in the market, no cabs needed.'
        },
        {
          name: 'Wilson',
          review: 'Once is not enough for this place! Such beauty.'
        },
        {
          name: 'Harry',
          review: 'You must visit this on your next trip to Italy!'
        }
      ],
      briefDesc:
        'Cinque Terre is mentioned in documents dating to the 11th century. Monterosso and Vernazza were settled first and the other villages grew later, whilst within the territory of the Republic of Genoa. In the 16th century the inhabitants reinforced existing forts and built new defense towers to defend the area from attacks by the Turks. Cinque Terre experienced economic decline from the 17th to 19th centuries, recovering when an arsenal was built in La Spezia and it gained a railway link to Genoa. The railway led to migration from the area and a decline in traditional industries until the growth of tourism from the 1970s onwards brought some prosperity.'
    }
  ];

  launchDetail(ev, index) {
    let x = ev.target.closest('ion-card').getBoundingClientRect().x;
    let y = ev.target.closest('ion-card').getBoundingClientRect().y;
    let bgColor = window
      .getComputedStyle(ev.target.closest('ion-card'))
      .getPropertyValue('background');
    let selectedObj = this.items[index];
    let image = selectedObj['img'];

    this.navCtrl.push(
      TasksdetailsPage,
      {
        itemDetails: this.items[index],
        coords: { x: x, y: y },
        bgColor,
        image
      },
      { animate: false }
    );
  }

  getTasks() {
    var resourceRequest = new WLResourceRequest(
      'http://localhost:3000/tasklist',
      WLResourceRequest.GET,
      { useAPIProxy: false }
    );
    resourceRequest.send().then(
      function(response) {
        alert('Success: ' + response.responseText);
      },
      function(response) {
        alert('Failure: ' + JSON.stringify(response));
      }
    );
  }
}
