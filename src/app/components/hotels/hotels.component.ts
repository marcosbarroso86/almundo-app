import { Component, OnInit } from '@angular/core';
import { IHotel } from '../../interfaces/hotel.interface';
import { HotelService } from '../../services/hotel.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels:IHotel[] = [];

  constructor(private _hotelService:HotelService) { }

  async ngOnInit() {
      this.hotels = await this._hotelService.getHotels();
  }

}
