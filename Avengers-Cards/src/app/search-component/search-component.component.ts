import { Component, OnInit } from '@angular/core';
import { AvengersService } from '../avengers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  filterOptions: { filter: string, value: string }[] = [
    {
      "filter": "Name",
      "value": "name"
    },
    {
      "filter": "ID",
      "value": "id"
    }
  ];
  search: string;
  inputIsValid: boolean = false;
  radioSelected: boolean = false;
  missingErrors = {
    'filter': 'Please select a filter option',
    'text': 'Please enter search text',
    'all': 'You need to select filter and place a search text'
  };
  tableContent: string = "";
  searchOnGoing: boolean = false;
  searchDone: boolean = false;
  resultsArray = [
    { 'id': '1', 'name': 'Bruce Wayne', 'publisher': 'DC', 'alias': 'Batman' },
    { 'id': '2', 'name': 'Thor', 'publisher': 'Marvel', 'alias': 'God of Thunder' }
  ];
  selectedFilter: string = '';

  constructor(private service: AvengersService) { }

  ngOnInit() {
    this.filterOptions;
    this.search = "";
    this.missingErrors;
    this.tableContent;
  }

  checkIfInputIsValid(event: KeyboardEvent) {
    let radioInputs = <any>document.getElementsByClassName("hero-filter");
    for (let i = 0; i < radioInputs.length; i++) {
      if (radioInputs[i].checked) this.radioSelected = true;
    }

    if (this.search !== "" && this.radioSelected) {
      this.inputIsValid = true;
      if (event.keyCode == 13 || event.which == 13) this.searchAvenger();

    } else {
      this.inputIsValid = false;
    }
  }

  searchAvenger() {
    this.searchOnGoing = true;
    this.searchDone = false;


    //Call Service here
    this.service.getSuperHeros(this.search).subscribe(
      res => {
        console.warn(res);
        let results;
        if (this.selectedFilter == 'name') {
          results = res.results[0];
        } else {
          results = res;
        }

        this.resultsArray.push({ 'name': results.name, 'id': results.id, 'publisher': results.biography.publisher, 'alias': results.biography.aliases });
        //When search is done
        this.searchOnGoing = false;
        this.searchDone = true;
      },
      err => console.log(`Something went wrong: ${err}`)
    )
  }





  clearResults() {
    this.resultsArray = [];
  }

}
