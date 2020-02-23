export interface IThemeProps {
  BgThemed: object;
  TextThemed: object;
  [x: string]: object;
}

export interface IThemeJson {
  dark: IThemeProps;
  light: IThemeProps;
  [x: string]: IThemeProps;
}
