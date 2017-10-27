import { MusicCard } from './music-card.model';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements AfterViewInit {

  @Input() item: MusicCard;

  constructor() { }

  ngAfterViewInit() {
    const audio: HTMLAudioElement = document.getElementById('audio-' + this.item.id) as HTMLAudioElement;
    if (audio) {
      audio.volume = 0.2;
    }
  }

}
