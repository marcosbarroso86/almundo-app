import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IteratorService } from '../../services/iterator.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _route: Router,private  _iterator:IteratorService) { }

  name:string = "";
  private stars:any[] = [];
  
  ngOnInit() {}

  public search: Function = async () => {
      
      if(this.stars && this.stars.length > 0){
          
        this._iterator.setRoundsIterator(this.stars.length);
        for (const stars of this.stars) {      
            await this._route.navigate( ['/search' , this.name ,  stars]);  
        }
      }else{
          await this._route.navigate( ['/search' , this.name ]);  
      }
  } 

  public selected: Function =  (star:string , event:any): void => {
      if(event.target.checked){
           this.stars.push(star);
      }else{
           let index =  this.stars.indexOf(star);
           this.stars.splice( index , 1);
      };     
  }

}
