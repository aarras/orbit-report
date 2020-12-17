import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  
  total: number;
  spaceDebris: number;
  communication: number;
  probe: number;
  positioning: number;
  spaceStation: number;
  telescope: number;  

  constructor() {
  }

  ngOnInit() {
  }

  countSatellites(satellites) {
    this.total = satellites.length;
    this.spaceDebris = 0;
    this.communication = 0;
    this.probe = 0;
    this.positioning = 0;
    this.spaceStation = 0;
    this.telescope = 0;

    for (let index = 0; index < satellites.length; index++) {
      if (satellites[index].type === "Space Debris") {
        this.spaceDebris++;
      } else if (satellites[index].type === "Communication") {
        this.communication++;
      } else if (satellites[index].type === "Probe") {
        this.probe++;
      } else if (satellites[index].type === "Positioning") {
        this.positioning++;
      } else if (satellites[index].type === "Space Station") {
        this.spaceStation++;
      } else if (satellites[index].type === "Telescope") {
        this.telescope++;
      }
    }
    return this;
  }
}
