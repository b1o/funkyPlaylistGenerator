import { environment } from '../../environments/environment';
import { NetworkService } from './network.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MusicService {

  public currentOffset = 0;

  private musicTracks: Subject<any> = new Subject<any>();
  private previousTerm: string;

  constructor(private networkService: NetworkService) { }

  public tracks() {
    return this.musicTracks.asObservable();
  }

  public searchMusic(term: string) {
    const url = `https://api.spotify.com/v1/search`;

    const params: [{ key: string, value: any }] = [
      { key: 'q', value: term },
      { key: 'type', value: 'track' },
      { key: 'client_id', value: environment.spotifyClientID },
      { key: 'limit', value: 50 },
      { key: 'offset', value: this.currentOffset }
    ];


    this.networkService.get(url, params)
      .subscribe((data: any) => {

        if (this.previousTerm === term) {
          this.currentOffset += data.tracks.items.length;
        } else {
          this.previousTerm = term;
          this.currentOffset = data.tracks.items.length;
        }

        console.log(`got ${this.currentOffset} tracks`);
        this.musicTracks.next(data);
      });

    return this.musicTracks;
  }

  private noop = () => { };
}
