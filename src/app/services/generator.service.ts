import { filter } from 'rxjs/operator/filter';
import { MusicService } from './music.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeneratorService {


  public sentence: string;
  public words: Array<string>;

  public results = [];
  public resultStream: Subject<any> = new Subject<any>();

  private allowedSearchResults = 100;
  private currentSearchResults = 0;
  private currentIndex = 0;
  private done: Subject<any> = new Subject<any>();

  private searchTerms;

  constructor(private musicService: MusicService) {
    this.done.subscribe(i => {
      const term = this.searchTerms[this.currentIndex];
      console.log('%c searching for ' + term, 'color: blue');
      this.musicService.searchMusic(term)
        .subscribe((data: any) => {
          for (const item of data.tracks.items) {
            if (item.name.toLowerCase() === term.toLowerCase()) {
              console.log('%c found song ' + item.name, 'color: green');
              this.results.push(item);
              break;
            }
          }

          this.currentIndex++;
          if (this.currentIndex < this.searchTerms.length) {
            this.done.next();

          } else {
            console.log('songs', this.results.map(item => item.name))
            const combos: Array<Array<any>> = this.combinations(this.results, 1);

            for (const combo of combos) {
              const newSentence = combo.map(item => item.name).join(' ').toLocaleLowerCase();
              if (newSentence === this.sentence.toLowerCase()) {
                console.log(combo)
                this.resultStream.next(combo)
                break;
              }
            }

            this.currentIndex = 0;
          }
        });
    });
  }

  generatePlaylist(arr: Array<any>): any {
    for (let i; i < arr.length; i++) {
      for (let j; j < arr.length; j++) {

      }
    }
  }

  parseResult(sentence: string) {
    this.sentence = sentence;
    this.words = sentence.trim().split(' ');
    console.log(this.done);
    this.results = [];

    this.searchTerms = this.combine(this.words);
    console.log(this.searchTerms)

    this.done.next();

  }

  combinations(a, min) {
    const fn = function (n, src, got, all) {
      if (n === 0) {
        if (got.length > 0) {
          all[all.length] = got;
        }
        return;
      }
      for (let j = 0; j < src.length; j++) {
        fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
      }
      return;
    }
    let res = [];
    for (let i = min; i < a.length; i++) {
      fn(i, a, [], res);
    }
    res.push(a);
    return res;
  }

  combine(array) {
    let result: Array<Array<number>> = [];
    result.push(array);

    for (let length = 2; length <= array.length; length++) {
      for (let startIndex = 0; startIndex < array.length; startIndex++) {
        const temp = []
        let count = startIndex;
        for (let index = 0; index < length - 1; index++) {
          temp.push(array[count++]);
        }
        result.push(temp);

      }
    }
    result = result.filter(a => {
      return !a.includes(undefined);
    });

    return result.map(a => a.join(' '));
  }

  private makeWord(indecies) {
    let term = '';

    for (const index of indecies) {
      term += this.words[index] + ' ';
    }
    return term.trim();
  }

  private searchForTerm(term: string) {
    return this.musicService.searchMusic(term);
  }

}
