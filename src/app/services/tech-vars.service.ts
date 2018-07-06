import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechVarsI } from '../interfaces/tech-vars';

@Injectable()
export class TechVarsService {
  public vars: BehaviorSubject<TechVarsI> = new BehaviorSubject<TechVarsI>({
    card: {
      default: {background: '#fff', boxShadow: '.1em .1em #d8dadc'},
      focused: {boxShadow: '.3em .3em #d8dadc'},
      clicked: {},
    },
    cardHeader: {
      default: {padding: '1em', borderBottom: '1px solid #e9ecef'},
      focused: {},
      clicked: {},
    },
    cardBody: {
      default: {padding: '1em'},
      focused: {},
      clicked: {},
    },
    cardFooter: {
      default: {padding: '1em', borderTop: '1px solid #e9ecef'},
      focused: {},
      clicked: {},
    },
    button: {
      default: {
        fontSize: '.9em', border: '0px', cursor: 'pointer', lineHeight: '1em', padding: '1em', outline: 'none', fontWeight: 'bold',
        background: '#fff'
      },
      focused: {},
      clicked: {},
    }
  });

  constructor() {
  }
}
