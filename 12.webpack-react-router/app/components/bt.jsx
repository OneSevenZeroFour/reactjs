import React from "react";
import {Button, Modal} from 'react-bootstrap';
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isshow: true
    }
    this.modalClose = () => {
      this.setState({isshow: false})
    }
    this.modalOpen = () => {
      this.setState({isshow: true})
    }
  }
  render() {
    return (
      <div>
        <Button onClick={this.modalOpen}>OK</Button>
        <Modal.Dialog style={{
          display: this.state.isshow
            ? 'block'
            : 'none'
        }}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.modalClose}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
}

export default Child;
