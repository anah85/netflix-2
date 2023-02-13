import { PelisInterface } from './../../models/PelisInterface';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() public top5!: PelisInterface;

  constructor(){}
}
