export interface TechVarsElStyleI {
  initial?: { [key: string]: string };
  default?: { [key: string]: string };
  focused?: { [key: string]: string };
  clicked?: { [key: string]: string };
}

export interface TechVarsI {
  card: TechVarsElStyleI;
}
