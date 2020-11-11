import React, { Component } from 'react'

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
    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card text-white bg-gradient-success text-center">
                    <div className="card-content">
                        <div className="card-body">
                            <h3 className="card-title pt-1">{this.props.center.name}</h3>
                            <p className="card-text text-warning">Code : {this.props.center.code}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}