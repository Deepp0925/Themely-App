import { observable, computed } from "mobx";
import { IThemeJson } from "../interface";
export class ThemeStore {
  @observable private Theme: IThemeJson = {
    light: {
      BgThemed: {
        "background-color": "#fff"
      },
      TextThemed: {
        color: "#222"
      }
    },
    dark: {
      BgThemed: {
        "background-color": "#222"
      },
      TextThemed: {
        color: "#fff"
      }
    }
  };

  set AddStyle(prop: { prop: string; DarkValue: object; LightValue: object }) {
    this.Theme.dark[prop.prop] = prop.DarkValue;
    this.Theme.light[prop.prop] = prop.LightValue;
  }

  @computed get Style(): IThemeJson {
    return this.Theme;
  }

  set DeleteStyle(ClassName: string) {
    delete this.Theme.dark[ClassName];
    delete this.Theme.light[ClassName];
  }
}

export default new ThemeStore();
