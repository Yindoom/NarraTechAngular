import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RequestService} from '../../Shared/Services/request.service';
import {Sample} from '../../Shared/Models/sample';
import {BooltostringService} from '../../Shared/Services/booltostring.service';
import {Router} from '@angular/router';


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
  typeoptions = ['Average', 'Point', 'Maximum', 'Minimum'];

  constructor(private service: RequestService, private router: Router) { }

  ngOnInit() {

  }
  save() {

    const req = this.sendRequestForm.value;
    if (req.sampleType === '') {
      req.sampleType = 'Average';
    }

    this.service.sendRequest(req).subscribe(o => { this.router.navigateByUrl('/requestlist'); } );
  }
}
