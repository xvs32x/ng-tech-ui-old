export interface TechVarsStyleI {
  [key: string]: string;
}

export interface TechVarsElStyleI {
  default: TechVarsStyleI;
  focused: TechVarsStyleI;
  clicked: TechVarsStyleI;
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
}
