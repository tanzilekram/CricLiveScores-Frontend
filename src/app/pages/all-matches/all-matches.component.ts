import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-all-matches',
  standalone: true,
  imports: [CommonModule,MatchCardComponent,NgxTypedJsModule],
  templateUrl: './all-matches.component.html',
  styleUrl: './all-matches.component.css'
})
export class AllMatchesComponent implements OnInit{

  constructor(private api:ApiCallService){}

  allMatches: any;
  loading=false

  ngOnInit(): void {
    this.loadMatchHistory()
   }

  loadMatchHistory(){

    this.api.getAllMatches()
    .subscribe({
      next:data=>{
        console.log(data);
        this.allMatches=data;
      }
    })

  }

}
