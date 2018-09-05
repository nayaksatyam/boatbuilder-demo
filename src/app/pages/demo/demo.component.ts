import { Component, AfterViewInit } from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { BoatsService } from '../../boats.service';

@Component({
	selector: 'ngbd-pagination',
	templateUrl: './demo.component.html'
})
export class DemoComponent implements AfterViewInit {
	subtitle:string;	
	private boats: any;

	constructor(private dataService: BoatsService) {
		this.subtitle = "This is the boat builder demo."
	}

	ngOnInit(){
		this.dataService.getJsonData().subscribe(data => this.boats= data);
	}

	ngAfterViewInit(){}

	public beforeChange($event: NgbTabChangeEvent) {
		if ($event.nextId === 'tab-preventchange2') {
		  $event.preventDefault();
		}
	  };

	public imageSource($scope)
	{
		return "assets/images/boats/" + $scope.BoatId + ".jpg";
	}
}