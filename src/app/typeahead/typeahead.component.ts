// import { Component, OnInit } from '@angular/core';
// import { Observable, fromEvent } from 'rxjs';
// import { Input } from '@angular/compiler/src/core';
// import { KeyValue } from '@angular/common';


// @Component({
//   selector: 'app-typeahead',
//   templateUrl: './typeahead.component.html',
//   styleUrls: ['./typeahead.component.css']
// })
// export class TypeaheadComponent implements OnInit {
//   //   output: any = [];
//   //   search$: any;
//   //   countryList = ['india', 'indonesia', 'bangladesh'];
//   // constructor() { }

//   // ngOnInit() {
//   //   const input: any = document.getElementById('search');
//   //   console.log(input);
//   //                 fromEvent(input, 'keyup')
//   //                 .subscribe((evt: KeyboardEvent) => {
//   //     console.log(this.search$);
//   //   });
//   //   }

//   //   applyFilter(str: string) {
//   //     const output: any = [];
//   //     // tslint:disable-next-line:no-debugger
//   //     debugger;
//   //     this.countryList.forEach(element => {
//   //       if (element.toLowerCase().indexOf(str.toLowerCase()) >= 0) {
//   //         output.push(element);
//   //       }
//   //     });
//   //     this.output = output;
//   //   }

// }
import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const states = ['India', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent {
  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
      }
