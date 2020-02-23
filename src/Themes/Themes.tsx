import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { ThemeStore } from "../Store/Theme";
import Theme from "./Theme";
import EditThemeProp from "./EditThemeProp";

interface ThemesProps {
  Theme?: ThemeStore;
}

@inject("Theme")
@observer
class Themes extends Component<ThemesProps> {
  private EditPropRef: React.RefObject<EditThemeProp> = React.createRef();

  private OpenEditModal(className: string) {
    this.EditPropRef.current.OpenModal();
    setTimeout(() => this.EditPropRef.current.SetClassName(className), 0);
  }

  render() {
    const Themes = Object.keys(this.props.Theme.Style);
    return (
      <React.Fragment>
        <EditThemeProp ref={this.EditPropRef} />
        {Themes.map((_Theme, i) => (
          <Theme
            themeColor={Themes[i]}
            key={i}
            first={i === 0}
            OpenEdit={this.OpenEditModal.bind(this)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Themes;
