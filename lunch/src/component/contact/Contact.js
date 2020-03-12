import React, { Component } from 'react';

import MapPresenter from './MapPresenter';
import './Contact.css'
import { border } from '@material-ui/system';

class Contact extends Component {
    render(){
        return (
            <div>
                <div className="contactTop">
                    <div className="contactTop_back"/>
                    <img src="https://images.unsplash.com/photo-1429153243204-48d8e868f40d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80" alt="contact_back" className="contact_img" />
                    <div className="contactTop_text" >
                        Here We Are
                    </div>
                </div>
                <div className="contact_contents">
                    <div className="contact_fchild">
                        <div className="form_tag">
                            <div style={{ textAlign:"center"}}>
                                <h4>Message</h4>
                            </div>
                            <div style={{ marginLeft:"4.4rem", border:"1px solid black", marginRight: "6.2rem" }}>
                                <form className="contact_form" method="post">
                                    <input name="Name" placeholder= "Name" />
                                    <input name="Email" placeholder="Email address" />
                                    <input name="Phone" placeholder="Phone number" />
                                    <textarea name ="content" rows={15} cols={50} placeholder="Message" />
                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact_schild">
                        <MapPresenter />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;