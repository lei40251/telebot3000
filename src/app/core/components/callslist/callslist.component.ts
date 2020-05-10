import { Component } from '@angular/core';

import { CallspollService } from './../../../app-jssip/services/callspoll.service';
import { UaService } from './../../../app-jssip/services/ua.service';

@Component({
  selector: 'app-callslist',
  templateUrl: './callslist.component.html',
  styleUrls: ['./callslist.component.scss'],
})
export class CallslistComponent {
  constructor(public callsPool: CallspollService, public UA: UaService) {}
}
