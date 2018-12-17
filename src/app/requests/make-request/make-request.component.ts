import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RequestService} from '../../Shared/Services/request.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.component.html',
  styleUrls: ['./make-request.component.css']
})
export class MakeRequestComponent implements OnInit {

  // Reactive form to manually create a request for data
  sendRequestForm = new FormGroup({
    tagName: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    interval: new FormControl(''),
    sampleType: new FormControl('')
  });

  // Sample type options, limited to avrg, exact, max val and min val
  typeoptions = ['Average', 'Point', 'Maximum', 'Minimum'];

  constructor(private service: RequestService, private router: Router) { }

  ngOnInit() {

  }

  // sends created request to the backend
  // Due to the options picker being freaky, the if-statement is a work-around for the default value being null
  // navigates to the requestlist component afterwards
  save() {

    const req = this.sendRequestForm.value;
    if (req.sampleType === '') {
      req.sampleType = 'Average';
    }

    this.service.sendRequest(req).subscribe(o => { this.router.navigateByUrl('/requestlist'); } );
  }
}
