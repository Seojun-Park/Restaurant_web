import React, { Component } from 'react';

import Bottom from '../bottom/Bottom'
import './Home.css';

class Home extends Component {
    // contructor(props) {
    //     super(props);
    //     this.state={
    //         imgSrc0: 't1',
    //         imgSrc1: 't2',
    //         imgSrc2: 't3',
    //         imgSrc3: 't4',
    //         imgSrc4: 't5',
    //     }
    // }

    render() {
        return (
            <div>
                <div className="homeTopLayout">
                    <img src="https://dummyimage.com/600x400/424299/fff.png&text=Logo" className="homeTopLayoutImage" alt="home logo" style={{"margin-top":"2rem"}} />
                    <p className="white-large" style={{"margin-top":"2rem"}}>
                        FRESH, FAST and Yammy</p>
                    <p className="white-title" style={{"margin-top": "2rem"}}>
                        Order and Delivery 000-0000-0000</p>
                    <button className="view_button">VIEW MENU</button>
                </div>
                <div style={{"height":"18rem", "text-align":"center", "background-color":"#EEEEEE", "padding-top":"2rem","box-sizing":"border-box"}}>
                    <p className="black-title" style={{"margin-top":"1rem"}}>
                       We are open from AM 9:00 to PM 6:00 on weekdays </p>
                    <p className="black-content" style={{"margin-top":"2rem"}}>
                        Since 2011.1.1</p>
                    <button className="follow_button">Follow @me</button>
                </div>
                <div style={{"height":"18rem", "text-align":"center", "background-color":"white", "padding-top":"2rem","box-sizing":"border-box"}}>
                    <p className="black-title" style={{'margin-top':'1rem'}}>
                        We offer discounts on some menus!</p>
                    <p className="black-content" style={{'margin-top':'1rem'}}>
                        Menu1, Menu2, Menu3</p>
                    <button className="order_button">Order Menu</button>
                </div>
                <div>
                    <img src="https://dummyimage.com/600x400/11112e/eeeeee.png&text=img" alt="foodimg" width="25%" />
                    <img src="https://dummyimage.com/600x400/11112e/eeeeee.png&text=img" alt="foodimg" width="25%" />
                    <img src="https://dummyimage.com/600x400/11112e/eeeeee.png&text=img" alt="foodimg" width="25%" />
                    <img src="https://dummyimage.com/600x400/11112e/eeeeee.png&text=img" alt="foodimg" width="25%" />
                </div>
                <Bottom />
            </div>
        );
    }

}
export default Home;