import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  range: any = 50;

  constructor(private cd: ChangeDetectorRef) {

  }

  coverage() {
    if (typeof this.range === "string" && this.range.length !== 0) {
      return this.range;
    }
  }

  change(value) {
    this.range = value;
    console.log(this.range)
  }

  ngOnInit() {
    setInterval(() => {
      this.range++;
      this.cd.detectChanges();
    }, 500);
  }
}
