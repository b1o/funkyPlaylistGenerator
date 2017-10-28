import { toMusicCard } from '../music-search/music-search.component';
import { GeneratorService } from '../../services/generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  public result = [];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
    this.generatorService.resultStream
      .subscribe(data => {
        this.result = data.map(toMusicCard);
      });
  }

}
