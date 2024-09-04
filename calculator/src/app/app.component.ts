import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  stringToEvaluate : string =""
  takeInput(num: string){
    this.stringToEvaluate=this.stringToEvaluate + num;
  }
  evaluateResult(){
    if(this.stringToEvaluate != ''){
      this.stringToEvaluate= eval(this.stringToEvaluate);
    }
  }
  resetInput(){
    this.stringToEvaluate="";
  }
}
