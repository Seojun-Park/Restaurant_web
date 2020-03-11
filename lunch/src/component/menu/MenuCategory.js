import React, { Component} from 'react';

import './Menu.css'



class MenuCategory extends Component{
    render() {
        return (
            <div className="cate_root">
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default MenuCategory;