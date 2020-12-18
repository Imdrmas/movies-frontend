import { Component, OnInit } from '@angular/core';
import { Artistes } from '../model/Artistes';
import { ArtisteService } from '../service/artiste.service';

@Component({
  selector: 'app-find-all-artistes',
  templateUrl: './find-all-artistes.component.html',
  styleUrls: ['./find-all-artistes.component.scss']
})
export class FindAllArtistesComponent implements OnInit {
  artistes: Artistes[];
  spinnerLoad = true;
  showTable = false;
  allNumber: number;
  p = 0;

  constructor(private artisteService: ArtisteService) { }

  ngOnInit() {
    this.artisteService.findAllArtistes().subscribe(data => {
      this.artistes = data;
      this.spinnerLoad = false;
      this.showTable = true;
      this.allNumber = this.artistes.length;
    });
  }

}
