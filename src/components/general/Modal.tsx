import React from 'react'; 

interface modalState {
  modalClassName: string; 
  closeModal : () => void; 
}

export default class Modal extends React.Component<modalState> {

    render(){
        return <div id="modal" className={this.props.modalClassName}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="modal-card">
            <div className="card">
            {this.props.children}
            </div>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.closeModal}></button>
      </div>
    }
}; 