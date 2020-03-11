import React, { Component } from 'react';

import MenuCategory from './MenuCategory';
import MenuContent from './MenuContent'
import './Menu.css';

const databaseURL = 'https://lunchbox-e853c.firebaseio.com/';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            menuBaverageData: {},
            menuFoodData: {},
        };
    }

    componentDidMount(){
        this.getMenuBaverageDate();
        this.getMenuFoodData();
    }

    getMenuBaverageDate() {
        fetch(`${databaseURL}/menuBaverage.json`)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(menuBaverage => this.setState({
            menuBaverageData : menuBaverage
        }));
    }

    getMenuFoodData() {
        fetch(`${databaseURL}/menuSalad.json`)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(menuBaverage => this.setState({
            menuFoodData : menuBaverage
        }));
    }

    render() {
        return (
            <div>
                <div className="menuTop">
                    <div className="menuTop_back" />
                    <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="food" className="menuTop_img" />
                    <div className="menuTop_text">
                        Enjoy your meal
                    </div>
                    <MenuCategory text="Food" />
                    {Object.keys((this.state.menuFoodData)).map(idx => {
                        var index = parseInt(idx);
                        if ((index + 1) % 2){
                            const c1 = this.state.menuFoodData[index];
                            const c2 = this.state.menuFoodData[index + 1];
                            if (c2 !== undefined) {
                                return (
                                    <div className="menuCont_two">
                                        <MenuContent
                                            name={c1.name}
                                            price={c1.price}
                                            img={c1.image}
                                            description={c1.description}/>
                                        <MenuContent
                                            name={c2.name}
                                            price={c2.price}
                                            img={c2.image}
                                            description={c2.description}/>
                                    </div>
                                )
                            } else{
                                return (
                                    <div className="menuCont_one">
                                        <MenuContent
                                            name={c1.name}
                                            price={c1.price}
                                            img={c1.image}
                                            description={c1.description}/>
                                    </div>
                                )
                            }
                        }
                        return null
                    })}

                    <MenuCategory text="Baverage" />
                    {Object.keys((this.state.menuBaverageData)).map(idx => {
                        var index = parseInt(idx);
                        if ((index + 1) % 2){
                            const c1 = this.state.menuBaverageData[index];
                            const c2 = this.state.menuBaverageData[index + 1];
                            if (c2 !== undefined) {
                                return (
                                    <div className="menuCont_two">
                                        <MenuContent
                                            name={c1.name}
                                            price={c1.price}
                                            img={c1.image}
                                            description={c1.description}/>
                                        <MenuContent
                                            name={c2.name}
                                            price={c2.price}
                                            img={c2.image}
                                            description={c2.description}/>
                                    </div>
                                )
                            } else{
                                return (
                                    <div className="menuCont_one">
                                        <MenuContent
                                            name={c1.name}
                                            price={c1.price}
                                            img={c1.image}
                                            description={c1.description}/>
                                    </div>
                                )
                            }
                        }
                        return null
                    })}
                </div>
                <br />
            </div>
        )
    }

}

export default Menu;


    // render() {
    //     return (
    //         <div>
    //             <div className="menuTop">
    //                 <div className="menuTop_back">
    //                     <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="food" className="menuTop_img" />
    //                     <div className="menuTop_text">
    //                         Enjoy the meal
    //                     </div>
    //                 </div>
    //                 <MenuCategory text="Food" />
    //                 <MenuContent />
    //                 <MenuCategory text="Baverage" />
    //                 <MenuContent />
    //             </div>
    //         </div>
    //     )
    // }