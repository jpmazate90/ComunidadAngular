import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users$: User = new User;
  constructor(private dataService: DataService){

  }

  ngOnInit(){

    
  return this.dataService.getUsers()
    .subscribe(data => this.users$ = data)
  }
  title = 'angular-trials';


  imprimirValor(){
    console.log(this.users$)
  }
}
