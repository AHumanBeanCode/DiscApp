import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonList, IonItem, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';

interface HoleScore {
  hole: number;
  par: number;
  throws: number;
}

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

  hole: number = 1;

  par: number = 3;
  throws: number = 3;

  totalPar: number = 0;
  totalThrows: number = 0;

  scores: HoleScore[] = [];

  decreasePar()
  {
    if(this.par > 0){
      this.par -= 1;
    }
  }
  increasePar()
  {
    this.par += 1;
  }

  decreaseThrows()
  {
    if(this.throws > 0){
      this.throws -= 1;
    }
  }
  increaseThrows()
  {
    this.throws += 1;
  }

  nextHole()
  {
    this.scores.push({
      hole: this.hole,
      par: this.par,
      throws: this.throws,
    });

    this.totalPar += this.par;
    this.totalThrows += this.throws;

    this.par = 3;
    this.throws = 3;

    this.hole += 1;
  }
}
