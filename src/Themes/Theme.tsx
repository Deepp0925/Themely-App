import React, { Component } from "react";
import ThemeProp from "./ThemeProp";
import { ThemeStore } from "../Store/Theme";
import { inject, observer } from "mobx-react";

interface ThemeProps {
  themeColor: any;
  first?: any;
  Theme?: ThemeStore;
  OpenEdit: (className: string) => void;
}

@inject("Theme")
@observer
class Theme extends Component<ThemeProps> {
  private BackgroundColor(): {
    BgColor: string;
    CardColor: string;
    TextColor: string;
  } {
    switch (this.props.themeColor) {
      case "dark":
        return {
          BgColor: "#222",
          CardColor: "#424242",
          TextColor: "#fff"
        };
      case "light":
        return {
          BgColor: "#fff",
          CardColor: "#EAEAEA",
          TextColor: "#222"
        };

      default:
        return {
          BgColor: "#fff",
          CardColor: "#ececec",
          TextColor: "#222"
        };
    }
  }

  private DeleteStyle(className: string) {
    this.props.Theme.DeleteStyle = className;
  }

  render() {
    const ThemeColor = this.BackgroundColor();
    return (
      <div
        className={`Section ${this.props.first ? "FirstSection" : ""}`}
        style={{ backgroundColor: ThemeColor.BgColor }}
      >
        <div className="SectionHeader">
          <h3 style={{ color: ThemeColor.TextColor }}>
            {this.props.themeColor}
          </h3>
        </div>
        <div className="SectionCards">
          {Object.keys(this.props.Theme.Style[this.props.themeColor]).map(
            (_ThemeProp, i) => (
              <ThemeProp
                OnEditClicked={this.props.OpenEdit}
                OnDeleteClicked={this.DeleteStyle.bind(this)}
                key={i}
                TextColor={ThemeColor.TextColor}
                CardColor={ThemeColor.CardColor}
                RuleName={_ThemeProp}
                CSSRules={
                  this.props.Theme.Style[this.props.themeColor][_ThemeProp]
                }
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Theme;
