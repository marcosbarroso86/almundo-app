import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { IHotel } from '../../interfaces/hotel.interface';
import { async } from 'q';
import { IteratorService } from '../../services/iterator.service';

@Component({
    selector: 'app-searcher',
    templateUrl: './searcher.component.html',
    styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

    hotels:IHotel[] = [];
    private array:IHotel[] = [];
    private rounds:number;
    private count:number = 0;

    constructor(private _activatedRoute: ActivatedRoute, 
        private _hotelService:HotelService , private _iterator:IteratorService) {
       
        _iterator.rounds.subscribe( rounds => this.rounds = rounds);
        this._activatedRoute.params.subscribe( async (parameter:any) => {        
            let data = await this._hotelService.getHotels(parameter);
            this.array = this.array.concat(data);
            this.hotels = this.array;
            this.count++;

            if(this.rounds == this.count){
                this.array = [];
                this.count = 0;
            }
        });
    }

    ngOnInit() {
      
    }

}
