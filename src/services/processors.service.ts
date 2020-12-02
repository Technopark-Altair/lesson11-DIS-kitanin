import { Injectable } from '@angular/core';
import { Processor } from 'src/models/Processor.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessorsService {
  processors: Array<Processor> = [
    { id: 0, name: 'intel что-то', frequency: '2.4', corsNumber: 4 },
    { id: 1, name: 'intel 1', frequency: '2.5', corsNumber: 2 },
    { id: 2, name: 'intel 2', frequency: '3.1', corsNumber: 8 },
    { id: 3, name: 'амд что-то', frequency: '4.2', corsNumber: 8 },
  ];
  constructor() { }

  getAllProcessors(){
    return this.processors;
  }
}
