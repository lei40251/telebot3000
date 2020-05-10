import { Component, Input } from '@angular/core';
import { UaService } from './../../../app-jssip/services/ua.service';
import { Call } from './../../../app-jssip/services/ua.service/call';

@Component({
  selector: 'app-call-brief',
  templateUrl: './call-brief.component.html',
  styleUrls: ['./call-brief.component.scss'],
})
export class CallBriefComponent {
  @Input() call: Call;
  @Input() source: string;
  constructor(public UA: UaService) {}
}
