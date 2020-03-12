import React, { Component } from 'react';

import MapPresenter from './MapPresenter';
import './Contact.css'

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
                            <div className="fchild_title">
                                <h4>Message</h4>
                            </div>
                            <div style={{ marginLeft:"4.4rem", marginRight: "6.2rem" }}>
                                <form className="contact_form" method="post">
                                    <input type="text" name="Name" placeholder= "Name" pattern="[a-zA-Z]" />
                                    <input type="text" name="Email" placeholder="Email address" />
                                    <input type="text" name="Phone" placeholder="Phone number" />
                                    <textarea name ="content" rows={15} cols={50} placeholder="Message" />
                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="contact_schild">
                        <div className="fchild_title">
                            <h4>Map</h4>
                        </div>
                        <div style={{ marginLeft:"3rem" }}>
                            <MapPresenter />
                        </div>
                    </div>
                </div>
                <div className="content_bottom">
                    <div className="cont_botPhone">
                        <h3>Contact</h3>
                        <p>
                           000-0000-0000 
                        </p>
                        <input type="button" value="Book a Table" />
                    </div>
                    <div className="cont_follow">
                        <h3>Follow us</h3>
                    </div>
                    <div className="folw_img">
                        <a href="/"><img src="https://www.procop.com/web/wp-content/uploads/2015/07/instagram-glyph-1-png-transparent-logo-2.png" width="4%" alt="insta logo" /></a>
                        <a hreft="/"><img src="https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png" width="4.1%" alt="facebook img" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;