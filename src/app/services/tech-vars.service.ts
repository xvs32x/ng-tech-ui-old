import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechVarsI } from '../interfaces/tech-vars';

@Injectable()
export class TechVarsService {
  public vars: BehaviorSubject<TechVarsI> = new BehaviorSubject<TechVarsI>({
    card: {
      default: {
        background: '#fff',
        borderRadius: '.3em',
        boxShadow: '0 0 1em #d8dfed'
      },
      focused: {},
      clicked: {},
    },
    cardHeader: {
      default: {
        padding: '1em',
        borderBottom: '1px solid #e9ecef'
      },
      focused: {},
      clicked: {},
    },
    cardBody: {
      default: {
        padding: '1em'
      },
      focused: {},
      clicked: {},
    },
    cardFooter: {
      default: {
        padding: '1em',
        borderTop: '1px solid #e9ecef'
      },
      focused: {},
      clicked: {},
    },
    button: {
      default: {
        fontSize: '.9em',
        cursor: 'pointer',
        lineHeight: '1em',
        padding: '1em',
        outline: 'none',
        fontWeight: 'bold',
        background: '#f8f9fa',
        color: '#212529',
        border: 'none',
        borderRadius: '.3em',
        boxShadow: 'none'
      },
      focused: {
        background: '#e2e6ea'
      },
      clicked: {
        boxShadow: '0 0 0 0.2rem rgba(6,101,208,.5)'
      },
    },
    buttonPrimary: {
      default: {
        fontSize: '.9em',
        cursor: 'pointer',
        lineHeight: '1em',
        padding: '1em',
        outline: 'none',
        fontWeight: 'bold',
        background: '#2460CC',
        color: '#fff',
        border: 'none',
        borderRadius: '.3em',
        boxShadow: 'none'
      },
      focused: {
        background: '#253b92'
      },
      clicked: {
        boxShadow: '0 0 0 0.2rem rgba(6, 101, 208, .5)'
      },
    },
    radio: {
      default: {
        display: 'block',
        background: '#F4F6FA',
        width: '1.11em',
        height: '1.11em',
        border: '1px solid #F4F6FA',
        borderRadius: '1.11em',
        boxShadow: 'none',
        padding: '0',
        margin: '.85em 0 .85em 0'
      },
      focused: {
        background: '#e6ebf4',
        border: '1px solid #e6ebf4'
      },
      clicked: {
        boxShadow: '0 0 0 0.1em rgba(6, 101, 208, .5)',
        background: 'rgb(36, 96, 204)',
        border: '1px solid rgba(255, 255, 255, .8)'
      },
    },
    radioLabel: {
      default: {
        display: 'block',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        color: '#585858',
        whiteSpace: 'nowrap',
        paddingLeft: '1.66em',
        marginTop: '-.1em',
      },
      focused: {},
      clicked: {},
    },
    inputText: {
      default: {
        padding: '.65em',
        border: '1px solid #F4F6FA',
        width: 'calc(100% - 1.7em)',
        outline: 'none',
        background: '#F4F6FA',
        borderRadius: '.3em',
        cursor: 'default'
      },
      focused: {},
      clicked: {
        background: '#E7EBF4',
        border: '1px solid #E7EBF4',
      },
      validated: {
        background: '#E4F0D9',
        border: '1px solid #E4F0D9'
      },
      invalidated: {
        background: '#FCF1ED',
        border: '1px solid #FCF1ED'
      },
      disabled: {
        background: '#E9ECEF',
        border: '1px solid #d8dfed',
        cursor: 'not-allowed'
      }
    },
    inputLabel: {
      default: {
        display: 'inline-block',
        fontSize: '1.1em',
        padding: '.9em 0 .2em 0'
      },
      focused: {},
      clicked: {},
    },
  });

  constructor() {
  }
}
