import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  routes = [
    { linkName: 'Profile', url: 'profile' },
    { linkName: 'Contact Info', url: 'contact' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
