import { filter } from 'rxjs/operator/filter';
import { MusicService } from './music.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeneratorService {

  public sentence: string;
  public words: Array<string>;

  public result = [];

  private allowedSearchResults = 200;
  private currentSearchResults = 0;
  private done: Subject<any> = new Subject<any>();
  private currentIndex = 0;

  constructor(private musicService: MusicService) {
    this.done
      .do((i) => console.log(i))
      .filter(index => index !== 'done' || this.currentIndex >= this.words.length)
      .subscribe(index => {
        console.log('%c searching for', 'color: blue', this.words[this.currentIndex]);
        if (this.currentIndex >= this.words.length) {
          console.log(this.result);
          return;
        }
        this.searchForTerm(this.words[this.currentIndex])
          .subscribe(data => {
            if (!this.words[this.currentIndex]) {
              return;
            }

            this.currentSearchResults += data.tracks.items.length;
            console.log('got data', data.tracks.items);


            let found = false;

            for (const item of data.tracks.items) {

              if (item.name.toLowerCase() === this.words[this.currentIndex].toLowerCase()) {

                console.log('%c found item', 'background: #222; color: green', item);
                this.result.push(item);
                this.currentSearchResults = 0;
                found = true;
                this.done.next(++this.currentIndex);
                break;
              }
            }

            if (!found) {
              console.log('%c couldnt find result for ' + this.words[this.currentIndex], 'color: red');
              this.currentSearchResults = 0;
              this.done.next(++this.currentIndex);
            }
          });
      });
  }

  parseResult(sentence: string) {
    this.sentence = sentence;
    this.words = sentence.trim().split(' ');
    console.log(this.done);


    this.done.next(this.currentIndex);


  }

  private searchForTerm(term: string) {
    return this.musicService.searchMusic(term);
  }

}
