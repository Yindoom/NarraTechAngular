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

  samples: Sample[];
  displayedColumns = ['timestamp', 'quality', 'value'];

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sample.getSamples(id).subscribe(s => { this.samples = s; } );
  }
getString(sample: Sample): string {
    return this.stringer.getStringSample(sample);
}
}
