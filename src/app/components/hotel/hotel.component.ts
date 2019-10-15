import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../../interfaces/hotel.interface';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../services/hotel.service';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

    @Input() hotel:IHotel;
    stars:number[];

    ngOnInit() {
        if(this.hotel.stars){
          this.stars = new Array(this.hotel.stars);
        }    
     }

    public getHotelImagePath: Function = (image): string => {
        return "/assets/img/hotels/" + image;
    }

    public getAmenitiesImagePath(amenity){
        return "/assets/icons/amenities/" + amenity + ".svg";
    }
}
