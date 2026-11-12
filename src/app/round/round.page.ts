import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonList, IonItem, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';

@Component({
  selector: 'app-round',
  templateUrl: './round.page.html',
  styleUrls: ['./round.page.scss'],
  imports: [RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonList, IonItem, IonLabel],
})
export class RoundPage implements OnInit {
  constructor() {
    addIcons({ add, remove })
  }

  ngOnInit() {}
}
