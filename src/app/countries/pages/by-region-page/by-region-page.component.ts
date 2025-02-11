import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = []
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region
    
      constructor ( private countriesService:CountriesService ) {}
    
      searchByRegion( value:Region ):void {

        this.selectedRegion = value;
        
        this.countriesService.searchRegion(value)
        .subscribe( countries => {
          this.countries = countries;
        })
      }

}
