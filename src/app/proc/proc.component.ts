import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Processor } from 'src/models/Processor.model';
import { ProcessorsService } from 'src/services/processors.service';

@Component({
  selector: 'app-proc',
  templateUrl: './proc.component.html',
  styleUrls: ['./proc.component.css']
})
export class ProcComponent implements OnInit {
  proc: Processor;

  constructor(private processorsService: ProcessorsService,
    private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.proc = this.processorsService
        .getAllProcessors()
        .find(el => el.id === +params.id);
    });
  }

}
