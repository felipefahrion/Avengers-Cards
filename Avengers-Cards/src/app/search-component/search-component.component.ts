import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['search-component.component.css']
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
  };
  tableContent: string = "";
  searchOnGoing: boolean = false;
  searchDone: boolean = false;
  resultsArray = [
    {'id': '1', 'name' : 'Bruce Wayne', 'publisher': 'DC', 'alias': 'Batman'},
    {'id': '2', 'name' : 'Thor', 'publisher': 'Marvel', 'alias': 'God of Thunder'}
  ];

  constructor() { }

  ngOnInit() {
    this.filterOptions;
    this.search = "";
    this.missingErrors;
    this.tableContent;
  }

  checkIfInputIsValid() {
    let radioInputs = <any> document.getElementsByClassName("hero-filter");

    for(let i = 0; i < radioInputs.length; i++) {
      if(radioInputs[i].checked) this.radioSelected = true;
    }

    if(this.search !== "" && this.radioSelected) { 
      this.inputIsValid = true;
    } else {
      this.inputIsValid = false;
    }
  }

  searchAvenger() {
    this.searchOnGoing = true;

    //Call Service here

    
    //When search is done
    this.searchDone = true;
    this.searchOnGoing = false;
  }

}
