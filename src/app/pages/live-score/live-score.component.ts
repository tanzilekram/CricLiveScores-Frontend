import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [CommonModule,MatchCardComponent,NgxTypedJsModule],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent implements OnInit {

  constructor(private api:ApiCallService){}

  liveData: any;
  loading = false

  ngOnInit(): void {
    this.getliveMatches()
  }

  


  getliveMatches() {
    this.loading = true;
  
    this.api.getliveMatches().subscribe(
      (data: any) => {
        this.liveData = data;
        console.log(data); 
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
  

  refreshScore(){
    this.getliveMatches()
  }
}
