import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-hindi',
  templateUrl: './weather-hindi.component.html',
  styleUrls: ['./weather-hindi.component.css']
})
export class WeatherHindiComponent implements OnInit {

  public weatherLocation: FormGroup;
  weatherData;
  intial;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.weatherLocation = this.formBuilder.group({
      location: ''
    })

    // inital location is set to delhi
    this.apiService.getWeather("Delhi").subscribe(data => this.weatherData = data)
  }

  getDataFromApi(formData) {
    this.apiService.getWeather(formData.location).subscribe(data => this.weatherData = data)
    console.log(this.weatherData)
    if(this.weatherData.request === undefined )
    {
      window.alert("Enter a correct location");
    }
  }

}