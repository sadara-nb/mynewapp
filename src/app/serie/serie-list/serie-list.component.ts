import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Serie[] = [];
  selected: boolean = false;
  selectedSerie!: Serie;
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
      this.getAverageSeasons(); // se llama una función aparte
    });
  }

  getAverageSeasons(): void {
    let total = 0;
    let count = 0;
    for (let i = 0; i < this.series.length; i++) {
      total += this.series[i].seasons;
      count++;
    }
    this.averageSeasons = count > 0 ? total / count : 0;
  }

  onSelected(serie: Serie): void {
    this.selectedSerie = serie;
    this.selected = true;
  }
}
