console.log("Hello");

const app = Vue.createApp({
    //data, function will be here
    data(){
        return {
            name: "Mohan Bera",
            names: ["mohan", "Bera", "Sourav", "Bera"]
        }
    }
});

app.mount('#app');


//Code for resizable column


import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'SampleAngular';
  public headers = [
    "Company",
    "Contact",
    "Country"
  ]
  public schema = [
    {
      "data": [
        "Alfreds Futterkiste",
        "Maria Anders",
        "Germany"
      ]
    },
    {
      "data": [
        "Centro comercial Moctezuma",
        "Francisco Chang",
        "Mexico"
      ]
    },
    {
      "data": [
        "Ernst Handel",
        "Roland Mendel",
        "Austria"
      ]
    },
    {
      "data": [
        "Island Trading",
        "Helen Bennett",
        "UK"
      ]
    },
    {
      "data": [
        "Laughing Bacchus Winecellars",
        "Yoshi Tannamuri",
        "Canada"
      ]
    },
    {
      "data": [
        "Magazzini Alimentari Riuniti",
        "Giovanni Rovelli",
        "Italy"
      ]
    }
  ]

  constructor(private readonly _renderer: Renderer2) {
  }

  private isMouseDown: boolean = false;
  private startX: number = 0;
  private currentColumn: any = null;
  private startWidth: number = 0;
  public tableWidth: number = 700;
  private firstTableWidth: number = 0;
  private currentColIndex = -1;
  public colWidth = [
    120,
    120,
    120,
    120
  ]

  public onMouseDown(event: any, width: number, colIndex: number) {
    this.isMouseDown = true;
    this.currentColumn = event.target.parentElement;
    this.startX = event.pageX;
    this.startWidth = this.colWidth[colIndex];
    this.firstTableWidth = this.tableWidth;
    this.currentColIndex = colIndex;
  }

  public onMouseMove(event: any) {
    if(this.isMouseDown) {
      //console.log(event.pageX+" "+this.startX+" "+this.currentColumn.clientWidth);
      const diff = event.pageX - this.startX;
      const newWidth = this.startWidth + diff;
      this.tableWidth = this.firstTableWidth + diff;
      this.colWidth[this.currentColIndex] = newWidth;
      //this._renderer.setStyle(this.currentColumn, 'width', `${newWidth}px`);
      this.colWidth[this.currentColIndex] = newWidth;
    }
  }

  public stopResizing() {
    this.isMouseDown = false;
  }

  public getColWidth(index: number) {
    return this.colWidth[index];
  }
}
