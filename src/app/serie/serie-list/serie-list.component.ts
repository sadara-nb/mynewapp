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

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe((data) => this.series = data);
  }
 
  onSelected(serie: Serie): void {
    this.selectedSerie = serie;
    this.selected = true;
}

}
