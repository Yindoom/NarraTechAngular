import { Component, OnInit } from '@angular/core';
import {SampleService} from '../../Shared/Services/sample.service';
import {ActivatedRoute} from '@angular/router';
import {Sample} from '../../Shared/Models/sample';
import {BooltostringService} from '../../Shared/Services/booltostring.service';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.css']
})
export class RequestDataComponent implements OnInit {

  constructor(private sample: SampleService, private route: ActivatedRoute, private stringer: BooltostringService) { }

  // List of samples.
  samples: Sample[];
  // columns for mat-table in view.
  displayedColumns = ['timestamp', 'quality', 'value'];

  // Why does this say it's being used??
  value = 90;

  // Fetches the data using the Id of the request. (Id is gotten from the url.
  // This part is the entire point of the application
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sample.getSamples(id).subscribe(s => { this.samples = s; } );
  }

  // uses the bool-to-string service, to make a boolean into a displayable string
getString(sample: Sample): string {
    return this.stringer.getStringSample(sample);
}
}
