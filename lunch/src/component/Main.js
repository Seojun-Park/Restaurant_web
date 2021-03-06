import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './Main.css'

import Home from './home/Home';
import Menu from './menu/Menu';
import Board from './board/Board'
import Order from './order/Order';
import Contact from './contact/Contact';
import Login from './login/Login';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
    }

    render(){
        return (
            <div>
                <div className="menubar">
                    <Tabs value={this.state.value} onChange={this.handleChange}
                            variant='standard' centered style={{ width: "100%" }}>
                        <div className="barcont">
                            <Tab label="Home" component={Link} to="/" />
                            <Tab label="Menu" component={Link} to="/menu" />
                            <Tab label="Board" component={Link} to="/board" />
                            <Tab label="order" component={Link} to="/order" />
                            <Tab label="Contact" component={Link} to="/contact" />
                            <Tab label="Login" component={Link} to="/login" />
                        </div>
                    </Tabs>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/order" component={Order} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        )
    }
}

export default Main;