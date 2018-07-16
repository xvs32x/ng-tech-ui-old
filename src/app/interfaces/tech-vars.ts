export interface TechVarsStyleI {
  [key: string]: string;
}

export interface TechVarsElStyleI {
  default: TechVarsStyleI;
  clicked: TechVarsStyleI;
  focused: TechVarsStyleI;
  disabled?: TechVarsStyleI;
  validated?: TechVarsStyleI;
  invalidated?: TechVarsStyleI;
}

export interface TechVarsI {
  card: TechVarsElStyleI;
  cardHeader: TechVarsElStyleI;
  cardBody: TechVarsElStyleI;
  cardFooter: TechVarsElStyleI;
  button: TechVarsElStyleI;
  buttonPrimary: TechVarsElStyleI;
  radio: TechVarsElStyleI;
  radioLabel: TechVarsElStyleI;
  inputText: TechVarsElStyleI;
  inputLabel: TechVarsElStyleI;
}
