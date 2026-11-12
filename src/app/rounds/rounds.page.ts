import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.page.html',
  styleUrls: ['./rounds.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class RoundsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
