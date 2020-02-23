export interface IThemeProps {
  BgThemed: object;
  TextThemed: object;
  [x: string]: object;
}

export interface IThemeJson {
  dark?: IThemeProps;
  light?: IThemeProps;
  [x: string]: IThemeProps;
}

export default class JSON2CSS {
  static Json2CSS(jsonData: object): string {
    // get all selectors
    const selectors = Object.keys(jsonData);
    return selectors
      .map(selector => {
        // converting to string so
        selector = selector.toString();
        const def = jsonData[selector];
        // individual rules
        // eg: background-color: grey;
        const rules = Object.keys(def);
        const selectorRules = rules
          .map(rule => {
            // add indentation
            return `\t${rule}:${def[rule]}`;
          })
          .join(";\n"); // every rule on new line
        return `${selector}{\n${selectorRules}\n}`;
      })
      .join("\n\n");
  }

  static CssifyJson(Data: IThemeJson): object {
    const Style = {};
    try {
      const Themes = Object.keys(Data);

      Themes.map(Theme => {
        const Props = Data[Theme];
        const PropKeys = Object.keys(Props);

        PropKeys.map(prop => {
          Style[`body[data-theme=${Theme}] .${prop}`] = Props[prop];
        });
      });
    } catch (error) {
      console.log(error);
    }
    return Style;
  }
}
