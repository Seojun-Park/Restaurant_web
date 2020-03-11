import React, { Component } from 'react';

import './Menu.css';
import Drink from '../../image/drPepper.png';

// const databaseURL = 'https://lunchbox-e853c.firebaseio.com/';

class MenuContent extends Component {
    render() {
        return (
            <div className="cont_root">
                <img src={Drink} alt={this.props.name} className="cont_img" />
                <div className="content">
                    <div className="cont_top">
                        <div className="cont_topLeft">
                            <div className="menu_name">
                                {this.props.name}
                            </div>
                        </div>
                        <div className="cont_topRight">
                            <div className="menu_price">
                                {this.props.price}
                            </div>
                            <button className="btn_choice">order</button>
                        </div>
                    </div>
                    <div className="cont_Bottom">
                        <div className="cont_description">
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data:{}
//         };
//     }

//     _get() {
//         fetch(`${databaseURL}/menuBaverage.json`)
//         .then(res => {
//             if (res.status !== 200) {
//                 throw new Error(res.statusText);
//             }
//             return res.json();
//         }).then(menuBaverage => this.setState({
//             data : menuBaverage
//         }));
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         return nextState.data !== this.state.data
//     }

//     componentDidMount(){
//         this._get();
//     }

//     render() {
//         return (
//             <div>
//                 {Object.keys(this.state.data).map(id => {
//                     const data = this.state.data[id];
//                     return (
//                         <div className="cont_root">
//                             <div className="cont_img">
//                                 <img src={Drink} alt={data.name}/>
//                             </div>
//                             <div className="content">
//                                 <div className="cont_top">
//                                     <div className="cont_topLeft">
//                                         <div className="menu_name">
//                                             {data.name}
//                                         </div>
//                                     </div>
//                                     <div className="cont_topRight">
//                                         <div className="menu_price">
//                                             {data.price}
//                                         </div>
//                                         <button className="btn_choice">
//                                             Order
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="cont_Bottom">
//                                     <div className="cont_description">
//                                         {data.description}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         )
//     };
// }

export default MenuContent;