import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IHotel } from '../interfaces/hotel.interface';

@Injectable({
    providedIn: 'root'
})
export class HotelService {
  
hotels:IHotel[] = [];
    private _PORT:number = 3000;
    private baseUrl:string = "http://127.0.0.1:3000/api/hotels";

    constructor(private _http:HttpClient) {}

    public getHotels: Function = async (params?): Promise<IHotel[]> => {
        return await this._http.get<IHotel[]>( this.baseUrl , { params : params } ).toPromise();
    }
}
