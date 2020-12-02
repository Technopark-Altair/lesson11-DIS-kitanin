import { Component, OnInit } from '@angular/core';
import { Processor } from 'src/models/Processor.model';
import { ProcessorsService } from 'src/services/processors.service';

@Component({
  selector: 'app-comparasion',
  templateUrl: './comparasion.component.html',
  styleUrls: ['./comparasion.component.css']
})
export class ComparasionComponent implements OnInit {
  processors: Array<Processor>;
  firstProcId: string;
  secondProcId: string;
  comparasionArray: Array<Processor>;
  
  constructor(private processorsService: ProcessorsService) { }

  ngOnInit(): void {
    this.processors = this.processorsService.getAllProcessors();
  }

  makeCompare(){
    this.comparasionArray = new Array<Processor>();

    let firstProc: Processor = this.processors.find(el => el.id === +this.firstProcId);
    this.comparasionArray.push(firstProc);

    let secondProc: Processor = this.processors.find(el => el.id === +this.secondProcId);
    this.comparasionArray.push(secondProc);
    
    console.log(this.comparasionArray);
    
  }

}
