import React, { Component } from "react";
import Modal from "react-modal";
import { inject, observer } from "mobx-react";
import { ThemeStore } from "./Store/Theme";
import { saveAs } from "file-saver";
import JSON2CSS from "./Json2Css";

interface DownloadState {
  IsOpen: boolean;
}

interface DownloadProps {
  Theme?: ThemeStore;
}

Modal.setAppElement("#root");

@inject("Theme")
@observer
class Download extends Component<DownloadProps, DownloadState> {
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

  private DownloadJSON() {
    const _Blob = new Blob([JSON.stringify(this.props.Theme.Style)]);
    saveAs(_Blob, "Theme.json");
  }

  private DownloadCSS() {
    const _Blob = new Blob([
      JSON2CSS.Json2CSS(JSON2CSS.CssifyJson(this.props.Theme.Style))
    ]);
    saveAs(_Blob, "Theme.css");
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
          <h3 className="Thin-Text">Download</h3>
        </div>

        <div className="Content">
          <div className="DownloadAsCSS">
            <button onClick={this.DownloadCSS.bind(this)}>
              Download CSS File
            </button>
          </div>
          <div className="DownloadAsJSON">
            <button onClick={this.DownloadJSON.bind(this)}>
              Download JSON File
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Download;
