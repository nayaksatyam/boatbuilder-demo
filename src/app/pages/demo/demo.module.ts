import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{
	path: '',
	data: {
        title: 'Demo Page',
        urls: [{title: 'Dashboard',url: '/'},{title: 'Demo Page'}]
    },
	component: DemoComponent
}];

@NgModule({
	imports: [
    	FormsModule,
		CommonModule, 
		
		NgbModule.forRoot(),
    	RouterModule.forChild(routes)
    ],
	declarations: [DemoComponent]
})
export class DemoModule { }