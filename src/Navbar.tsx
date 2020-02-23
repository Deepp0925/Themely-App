import React, { Component } from "react";
import AddThemeProp from "./Themes/AddThemeProp";
import Download from "./Download";

class Navbar extends Component {
  private AddModalRef = React.createRef<AddThemeProp>();
  private DownloadModalRef = React.createRef<Download>();
  private OpenAddModal() {
    this.AddModalRef.current.OpenModal();
  }

  private OpenDownloadModal() {
    this.DownloadModalRef.current.OpenModal();
  }

  render() {
    return (
      <div className="Navbar">
        <div className="AppNameWrapper">
          <h2 className="AppName">Themely</h2>
        </div>
        <div className="AddProp">
          <button onClick={this.OpenAddModal.bind(this)}>
            <i className="fas fa-plus"></i>
          </button>
          <AddThemeProp ref={this.AddModalRef} />
        </div>

        <div className="DownloadBtn">
          <button onClick={this.OpenDownloadModal.bind(this)}>
            <i className="fas fa-file-export"></i>
          </button>
          <Download ref={this.DownloadModalRef} />
        </div>
      </div>
    );
  }
}

export default Navbar;
