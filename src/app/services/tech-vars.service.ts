import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechVarsI } from '../interfaces/tech-vars';

@Injectable()
export class TechVarsService {
  public vars: BehaviorSubject<TechVarsI> = new BehaviorSubject<TechVarsI>({
    card: {
      default: {background: '#fff', borderRadius: '.3em', boxShadow: '0 0 1em #d8dfed'},
      focused: {},
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
        fontSize: '.9em', cursor: 'pointer', lineHeight: '1em', padding: '1em', outline: 'none', fontWeight: 'bold',
        background: '#f8f9fa', color: '#212529', border: 'none', borderRadius: '.3em', boxShadow: 'none'
      },
      focused: {background: '#e2e6ea'},
      clicked: {boxShadow: '0 0 0 0.2rem rgba(6,101,208,.5)'},
    },
    buttonPrimary: {
      default: {
        fontSize: '.9em', cursor: 'pointer', lineHeight: '1em', padding: '1em', outline: 'none', fontWeight: 'bold',
        background: '#2460CC', color: '#fff', border: 'none', borderRadius: '.3em', boxShadow: 'none'
      },
      focused: {background: '#253b92'},
      clicked: {boxShadow: '0 0 0 0.2rem rgba(6, 101, 208, .5)'},
    },
    inputSwitch: {
      default: {},
      focused: {},
      clicked: {},
    },
    radio: {
      default: {
        display: 'inline-block', background: 'transparent', width: '1.33em', height: '1.33em', border: '1px solid #2460CC',
        borderRadius: '1.33em', boxShadow: 'none'
      },
      focused: {border: '1px solid #253b92'},
      clicked: {boxShadow: '0 0 0 0.2rem rgba(6, 101, 208, .5)'},
    },
  });

  constructor() {
  }
}
