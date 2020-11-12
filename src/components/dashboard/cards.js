import React, { Component } from 'react'
import RegsModal from './Slide'
export default class Cards extends Component {

    render() {
        const { centers } = this.props
        return (
            <div className="row">
                {centers.map((center, i) => (
                    <Card center={center} key={i} />
                ))}
            </div>
        )
    }
}

class Card extends Component {
    state = {
        show: false,
      };
    
      showModal = () => {
          
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card text-white bg-gradient-success text-center" onClick={this.showModal}>
                    <div className="card-content">
                        <div className="card-body">
                            <h3 className="card-title pt-1">{this.props.center.name}</h3>
                            <p className="card-text text-warning">Code : {this.props.center.code}</p>
                        </div>
                    </div>
                </div>
                <RegsModal show={this.state.show} center={this.props.center} hideModal={this.hideModal} />
            </div>
        )
    }
}