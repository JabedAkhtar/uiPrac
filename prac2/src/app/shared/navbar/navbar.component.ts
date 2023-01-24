import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit
{
	navbarButtons: string[] = ["Home", "About Us", "Gallery", "Trips"]

	ngOnInit(): void
	{

	}

	redirectTo()
	{
		console.log("Buttons are working!! :)")
	}

}
