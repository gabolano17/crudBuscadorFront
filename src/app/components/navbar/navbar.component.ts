import { Component, OnInit } from '@angular/core';
import { CapturaDataService } from 'src/app/services/captura-data.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private capturaData: CapturaDataService) { }

  ngOnInit(): void {
  }

  getValue(data:any){
    this.capturaData.getData(data.target.value);
  }

}
