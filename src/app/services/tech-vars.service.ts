import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechVarsI } from '../interfaces/tech-vars';

@Injectable()
export class TechVarsService {
  public vars: BehaviorSubject<TechVarsI> = new BehaviorSubject<TechVarsI>({
    card: {
      initial: {background: '#fff'},
      default: {boxShadow: '5px 5px #d8dadc'},
      focused: {boxShadow: '10px 10px #d8dadc'}
    }
  });

  constructor() {
  }
}
