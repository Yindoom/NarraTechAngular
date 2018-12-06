import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RequestService} from '../../Shared/Services/request.service';
import {Sample} from '../../Shared/Models/sample';


@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {

  sendRequestForm = new FormGroup({
    tagName: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    interval: new FormControl(''),
    sampleType: new FormControl('')
  });

  samples: Sample[];

  typeoptions = ['Average', 'Point', 'Maximum', 'Minimum'];

  displayedColumns = ['timestamp', 'quality', 'value'];

  constructor(private service: RequestService) { }

  ngOnInit() {

  }
  save() {
    const req = this.sendRequestForm.value;
    if (req.sampleType === '') {
      req.sampleType = 'Average';
    }

    this.service.sendRequest(req).subscribe(o => { this.samples = o; } );
  }
  getString(sample: Sample): string {
    if (sample.quality === 0) {
      return 'Good';
    } else if (sample.quality === 1) {
      return 'Suspect';
    } else { return 'Bad'; }
  }
}
