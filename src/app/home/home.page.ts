import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [DatePipe, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class HomePage {
  
  constructor() {
    window.addEventListener('roundsUpdated', () => {
    this.loadRounds();
    });
  }

  ngOnInit() {
    this.loadRounds();
  }

  ionViewWillEnter()
  {
    this.loadRounds();
  }

  savedRounds: any[] = [];

  loadRounds() {
    const rounds = localStorage.getItem('rounds');

    this.savedRounds = rounds ? [...JSON.parse(rounds)].reverse() : [];
  }
}
