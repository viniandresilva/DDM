import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sorteio',
  templateUrl: './sorteio.page.html',
  styleUrls: ['./sorteio.page.scss'],
})
export class SorteioPage implements OnInit {
  public min: number;
  public max: number;
  public sorteio: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  setMin(event: any) {
    this.min = event.target.value;
  }

  setMax(event: any) {
    this.max = event.target.value;
  }
  sortear() {
    let min = Math.ceil(this.min);
    let max = Math.floor(this.max);
    this.sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
