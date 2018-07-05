import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechVarsI } from '../interfaces/tech-vars';

@Injectable()
export class TechVarsService {
  public vars: BehaviorSubject<TechVarsI> = new BehaviorSubject<TechVarsI>({
    card: {
      initial: {background: '#fff', boxShadow: '.1em .1em #d8dadc'},
      default: {boxShadow: '.3em .3em #d8dadc'},
      focused: {boxShadow: '.6em .6em #d8dadc'},
      clicked: {},
    },
    cardHeader: {
      initial: {padding: '1em', borderBottom: '1px solid #e9ecef'},
      default: {},
      focused: {},
      clicked: {},
    },
    cardBody: {
      initial: {padding: '1em'},
      default: {},
      focused: {},
      clicked: {},
    },
    cardFooter: {
      initial: {padding: '1em', borderTop: '1px solid #e9ecef'},
      default: {},
      focused: {},
      clicked: {},
    },
    button: {
      initial: {fontSize: '.9em', border: '0', cursor: 'pointer', 'lineHeight': '1em', padding: '1em', outline: 'none', fontWeight: 'bold'},
      default: {},
      focused: {},
      clicked: {},
    }
  });

  constructor() {
  }
}
