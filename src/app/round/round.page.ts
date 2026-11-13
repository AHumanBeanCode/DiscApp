import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonList, IonItem, IonLabel, IonTabBar, IonInput } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';
import { Router } from '@angular/router';


interface HoleScore {
  hole: number;
  par: number;
  throws: number;
}

@Component({
  selector: 'app-round',
  templateUrl: './round.page.html',
  styleUrls: ['./round.page.scss'],
  imports: [DatePipe, CommonModule, FormsModule, RouterLink, IonContent, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonList, IonItem, IonLabel, IonTabBar, IonInput],
})
export class RoundPage implements OnInit {
  constructor(private router: Router) {
    addIcons({ add, remove })
  }

  ngOnInit() {}

  courseName: string = "Hikoikoi Reserve"

  hole: number = 1;

  par: number = 3;
  throws: number = 3;

  totalPar: number = 0;
  totalThrows: number = 0;

  scores: HoleScore[] = [];

  date: string = new Date().toISOString(); 

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

  saveRound()
  {
    if(this.hole > 1){
      const round = {
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
          course: this.courseName,
          scores: this.scores.map((s) => s.throws),
          pars: this.scores.map((s) => s.par),
          totalScore: this.totalThrows,
          totalPar: this.totalPar
        };

        const rounds = JSON.parse(
          localStorage.getItem('rounds') || '[]'
        );

        rounds.push(round);

        localStorage.setItem('rounds', JSON.stringify(rounds));

        console.log('Round saved:', round);
    }

      // Reset scorecard
      this.courseName = "Hikoikoi Reserve"

      this.hole = 1;

      this.par = 3;
      this.throws = 3;

      this.totalPar = 0;
      this.totalThrows = 0;

      this.scores = [];

      window.dispatchEvent(new Event('roundsUpdated'));

      this.router.navigate(['/tabs/home'])
  }
}
