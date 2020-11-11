import React, { Component } from 'react';

class Post extends Component {
    render(){
        const { vehicle } = this.props;
        return(
            <div className="card">
                <div className="card-body">
                <h2>{vehicle.chasisNo}</h2>
                <p>{vehicle.modelName}</p>
                <p>{vehicle.noOfAxles}</p>
                <p>{vehicle.maufacturer}</p>
                </div>
            </div>
        )
    }
}

export default class Vehicle extends Component {
    render() {
        const { vehicles } = this.props;
        return (
           <div>
                {vehicles.map((veh,i) => 
                    <Post key={i} vehicle={veh} />
                )}
           </div>
        )
    }
}
