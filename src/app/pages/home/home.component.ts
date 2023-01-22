import { Component, OnInit } from '@angular/core';
import { DatapostService } from 'src/app/services/datapost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  posts:any = []; 
  page_actual = 1;
  
  constructor(private data:DatapostService){}

  ngOnInit(): void {

    this.data.getDataPost().subscribe(res => {
      this.posts = res;
    });

    }

  }
