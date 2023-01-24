import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit
{
	collapsed: boolean = true;

	ngOnInit(): void
	{

	}

	toggleSidebar()
	{
		this.collapsed = !this.collapsed;
	}

}
