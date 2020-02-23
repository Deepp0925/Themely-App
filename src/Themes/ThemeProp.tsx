import React, { Component } from "react";

interface ThemePropProps {
  CardColor: string;
  TextColor: string;
  CSSRules: object;
  RuleName: string;
  OnEditClicked: (RuleName: string) => void;
  OnDeleteClicked: (className: string) => void;
}

class ThemeProp extends Component<ThemePropProps> {
  render() {
    const Rule = Object.keys(this.props.CSSRules)[0];
    return (
      <div
        className="SectionCard shadow-xl scale-up-center"
        style={{ backgroundColor: this.props.CardColor }}
      >
        <div
          className="DeleteWrapper"
          onClick={this.props.OnDeleteClicked.bind(this, this.props.RuleName)}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
        <div
          className="EditWrapper"
          onClick={this.props.OnEditClicked.bind(this, this.props.RuleName)}
        >
          <i className="fas fa-pen" style={{ color: this.props.TextColor }} />
        </div>
        <div className="RuleName">
          <h3 style={{ color: this.props.TextColor }}>{this.props.RuleName}</h3>
        </div>
        <div className="PropWrapper">
          <p style={{ color: this.props.TextColor }}>
            {Rule}: {this.props.CSSRules[Rule]}
          </p>
        </div>
      </div>
    );
  }
}

export default ThemeProp;
