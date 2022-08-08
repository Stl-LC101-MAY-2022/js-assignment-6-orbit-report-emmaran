import { Component, OnInit, Input } from '@angular/core';
// import { count } from 'console';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

//  returnTotal(): number {
// 	let totalCount = 0;
// 	let acceptedTypes = ["Communication", "Probe", "Space Station", "Telescope", "Positioning"];

// 	for (let i=0; i<acceptedTypes.length; i++) {
// 		totalCount += this.countByType(acceptedTypes[i]);
// 	}

// 	return totalCount;
//  }

 countSatellites(): number {
	let totalCount: number = 0;
	let acceptedTypes: string[] = [];

	//create array of accepted types with no repeats
	for (let i=0; i<this.satellites.length; i++) {
		if (!acceptedTypes.includes(this.satellites[i].type)) {
			if (this.satellites[i].type !== "Space Debris") {
				acceptedTypes.push(this.satellites[i].type);
			}
		}
	}

	//loop through accepted types and add counts to total
	for (let i=0; i<acceptedTypes.length; i++) {
		totalCount += this.countByType(acceptedTypes[i]);
	}

	return totalCount;
 }

}