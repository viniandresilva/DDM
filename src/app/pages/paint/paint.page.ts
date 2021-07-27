import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'paint',
  templateUrl: './paint.page.html',
  styleUrls: ['./paint.page.scss'],
})
export class PaintPage implements AfterViewInit {
  @ViewChild('paintCanvas', {static: false}) canvas: any;
  @ViewChild('toolbar', {static: false}) toolbar: any;
  canvasElement: any;
  saveX: number;
  saveY: number;
  drawing = false;

  selectedColor = '#9e2956';
  colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#902fa3'];
  lineWidth = 15;

  constructor(
    private platform: Platform,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.swipeGesture(false);
  }


  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.platform.width() + '';
    this.canvasElement.height = this.platform.height() + '';
  }

  startDrawing(ev) {
    this.drawing = true;
    const position = this.canvasElement.getBoundingClientRect();

    this.saveX = ev.touches[0].pageX - position.x;
    this.saveY = ev.touches[0].pageY - position.y;
  }

  moved(ev) {
    const position = this.canvasElement.getBoundingClientRect();
    let ctx = this.canvasElement.getContext('2d');

    let currentX = ev.touches[0].pageX - position.x;
    let currentY = ev.touches[0].pageY - position.y;

    console.log(currentX);
    ctx.beginPath();

    ctx.lineJoin = 'round';
    ctx.strokeStyle = this.selectedColor;
    ctx.lineWidth = this.lineWidth;

    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();

    ctx.stroke();

    this.saveX = currentX;
    this.saveY = currentY;
  }

  endDrawing() {
    this.drawing = false;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  setLineWidth(ev) {
    console.log(ev);
    this.lineWidth = ev.detail.value;
  }
}
