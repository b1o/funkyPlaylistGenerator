import { GeneratorService } from '../../services/generator.service';
import { MusicCard } from '../music-card/music-card.model';
import { MusicService } from '../../services/music.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

import * as _ from 'lodash';


@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit, OnDestroy {

  public term: Subject<string> = new Subject();
  public result: MusicCard[] = [];
  public showLoading = false;
  public sub;
  public sentence;

  constructor(private musicSerivce: MusicService, private generator: GeneratorService) { }

  ngOnInit() {
    this.sub = this.musicSerivce.tracks()
      .subscribe(data => {
        console.log('got tracks')
        this.result = data.tracks.items.map(this.toMusicCard);
      });
  }

  search() {
    console.log(this.sentence)
    this.generator.parseResult(this.sentence);
  }

  toMusicCard = (item) => {
    const card: MusicCard = {
      name: item.name,
      img: item.album.images.filter(img => img.url != null)[0].url,
      artist: item.artists[0].name,
      preview: item.preview_url,
      id: item.id
    };
    return card;
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
