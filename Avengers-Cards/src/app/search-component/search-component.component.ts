import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  filterOptions: {filter: string, value: string}[] = [
    {
      "filter": "Name", 
      "value": "name"
    }, 
    {
      "filter": "ID", 
      "value" : "id"
    }, 
    {
      "filter": "Alias", 
      "value" : "aliases"
    }
  ];
  search: string;
  inputIsValid: boolean = false;
  radioSelected: boolean = false;
  missingErrors = {
    'filter' : 'Please select a filter option',
    'text' : 'Please enter search text',
    'all' : 'You need to select filter and place a search text'
  }

  constructor() { }

  ngOnInit() {
    this.filterOptions;
    this.search = "";
    this.missingErrors;
  }

  checkIfInputIsValid() {
    let inputIsValid = false,
        radioInputs = document.getElementsByClassName("hero-filter");

    for(let i = 0; i < radioInputs.length; i++) {
      if(radioInputs[i].checked) this.radioSelected = true;
    }

    if(this.search !== "" && this.radioSelected) { 
      inputIsValid = true;
    }
    this.inputIsValid = inputIsValid;
  }

  searchAvenger() {

  }

  generateTable() {

  }

}
