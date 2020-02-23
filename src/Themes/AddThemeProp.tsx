import React, { Component } from "react";
import Modal from "react-modal";
import { inject, observer } from "mobx-react";
import { ThemeStore } from "../Store/Theme";
import { Hex3ToHex6 } from "./Color";

interface AddThemeState {
  IsOpen: boolean;
}

interface AddThemePropProps {
  Theme?: ThemeStore;
}

Modal.setAppElement("#root");

@inject("Theme")
@observer
class AddThemeProp extends Component<AddThemePropProps, AddThemeState> {
  private PropNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  private CSSRuleRef: React.RefObject<HTMLSelectElement> = React.createRef();
  private DarkInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  private DarkColorRef: React.RefObject<HTMLInputElement> = React.createRef();
  private LightInputRef: React.RefObject<HTMLInputElement> = React.createRef();
  private LightColorRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: any) {
    super(props);
    this.state = {
      IsOpen: false
    };
  }

  CloseModal() {
    this.setState({
      IsOpen: false
    });
  }

  OpenModal() {
    this.setState({
      IsOpen: true
    });
  }

  AddProp() {
    this.props.Theme.AddStyle = {
      prop: this.PropNameRef.current.value,
      DarkValue: {
        [this.CSSRuleRef.current.value]: this.DarkColorRef.current.value
      },
      LightValue: {
        [this.CSSRuleRef.current.value]: this.LightColorRef.current.value
      }
    };

    this.CloseModal();
    console.log(this.props.Theme.Style.dark, this.props.Theme.Style.light);
  }

  AdjustDarkInput(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = evt.currentTarget.value;
    if (val.length === 7 || val.length === 4) {
      this.DarkColorRef.current.value = Hex3ToHex6(val);
    }
  }

  AdjustDarkColor(evt: React.ChangeEvent<HTMLInputElement>) {
    this.DarkInputRef.current.value = evt.currentTarget.value;
  }

  AdjustLightInput(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = evt.currentTarget.value;
    if (val.length === 7 || val.length === 4) {
      this.LightColorRef.current.value = Hex3ToHex6(val);
    }
  }

  AdjustLightColor(evt: React.ChangeEvent<HTMLInputElement>) {
    this.LightInputRef.current.value = evt.currentTarget.value;
  }

  render() {
    return (
      <Modal
        isOpen={this.state.IsOpen}
        onRequestClose={this.CloseModal.bind(this)}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        className="Modal"
        overlayClassName="ModalOverlay"
        contentLabel="Add Theme"
      >
        <div className="Header">
          <h3 className="Thin-Text">Add Theme</h3>
        </div>

        <div className="Content">
          <div className="PropName">
            <input
              placeholder="Property Name"
              className="PropNameInput"
              defaultValue="ClassName"
              ref={this.PropNameRef}
            />
          </div>
          <div className="SelectRule">
            <select name="slct" id="slct" ref={this.CSSRuleRef}>
              <option value="background-color">background-color</option>
              <option value="color">color</option>
            </select>
          </div>

          <div className="ThemeColors">
            <div className="ThemeName">
              <h4 className="Thin-Text">Dark</h4>
            </div>
            <div className="ThemeColorValue">
              <input
                placeholder="Property Name"
                className="PropNameInput"
                defaultValue="#000"
                ref={this.DarkInputRef}
                onChange={this.AdjustDarkInput.bind(this)}
              />
            </div>
            <div className="ThemeColorPicker">
              <input
                type="color"
                ref={this.DarkColorRef}
                onChange={this.AdjustDarkColor.bind(this)}
              />
            </div>
          </div>

          <div className="ThemeColors">
            <div className="ThemeName">
              <h4 className="Thin-Text">Light</h4>
            </div>
            <div className="ThemeColorValue">
              <input
                placeholder="Property Name"
                className="PropNameInput"
                defaultValue="#000"
                ref={this.LightInputRef}
                onChange={this.AdjustLightInput.bind(this)}
              />
            </div>
            <div className="ThemeColorPicker">
              <input
                type="color"
                ref={this.LightColorRef}
                onChange={this.AdjustLightColor.bind(this)}
              />
            </div>
          </div>

          <div className="AddThemeBtnWrapper">
            <button onClick={this.AddProp.bind(this)}>Add</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddThemeProp;
