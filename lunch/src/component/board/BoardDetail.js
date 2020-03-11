// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Reply from './Reply';
// import { Redirect } from 'react-router-dom';


// import './Board.css'
// import myFireBase from '../../config/myFireBase';
// import { object } from 'prop-types';

// const databaseRef = (new myFireBase).databaseRef;

// class BoardDetail extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             replyData: {},
//             replySubmitContent: '',
//             replyNum: 0
//         }
//     }

//     componentDidMount(){
//         this.getReplyData();
//     }

//     getReplyData() {
//         databaseRef.child('reply/').once('value').then(data=> {
//             this.setState({
//                 replyData: this.filterReplyData(data.val(),
//                 this.props.location.state.id)
//             })
//         })
//     }

//     filterReplyData = (totalReplyData, boardId) => {
//         let filteredReplyData = [];
//         let replyNum = 0;
//         object.key(totalReplyData).map((idx) => {
//             const r = totalReplyData[idx];
//             if(r.boardId === boardId){
//                 filteredReplyData.push(r);
//                 replyNum += 1;
//             }
//         })
//         this.setState({
//             replyNum: replyNum
//         });
//         return filteredReplyData;
//     }

//     postReplyData(reply) {
//         let postData = {
//             boardId: reply.boardId,
//             content: reply.content,
//             name: reply.name,
//             date: reply.date
//         }
//         let postKey = databaseRef.child('reply/').push().key;
//         let updates = {};
//         updates['/reply/' + postKey] = postData;
//         databaseRef.update(updates);
//         this.getReplyData();
//     }


//     handleSubmit =() => {
//         const reply = {
//             boardId : this.props.location.state.id,
//             content : this.state.replySubmitContent,
//             name: 'Unknown User',
//             // date: (new Date()).getFullYear() + '-' + (new Date()).getMonth() + '-' + (new date()).getDate()
//         }
//         if (!reply.content || !reply.boardId) {
//             alert('Write something');
//             return ;
//         }
//         this.postReplyData(reply);
//         this.setState({
//             replySubmitContent: ''
//         });
//         this.setState({
//             replyNum : this.state.replyNum + 1
//         });
//     }

//     handleValueChange = (e) => {
//         let nextState = {};
//         nextState[e.target.name] = e.target.value;
//         this.setState(nextState);
//     }
//     render() {
//         if (this.props.location.state === undefined) {
//             return (
//                 <Redirect to ="/board" />
//             )
//         } else {
//             return (
//                 <div>
//                     <div className="detailTop">
//                         <div className="detailTop_back"/>
//                         img src
//                         <div className="detailTop_text">
//                             This is Board detail page
//                         </div>
//                     </div>
//                     <div style={{ 'margin-left' : '5%', 'margin-right': '5%'}}>
//                         <Link to="/board">
//                             <button className="detail_btn" style={{"width":"5rem" , "margin-top":"1rem" }}>
//                                 back
//                             </button>
//                         </Link>
//                         <div className="detail_main">
//                             <div style={{ "height":"3rem" }}>
//                                 <div>
//                                     title
//                                 </div>
//                             </div>
//                             <div className="detail_date">
//                                 <div>
//                                     {this.props.location.state.createdDate}
//                                 </div>
//                             </div>
//                             <div className="detail_createdby">
//                                 <div>
//                                     {this.props.location.state.createdby}
//                                 </div>
//                             </div>
//                             <div className="detail_cont">
//                                 <div>
//                                     {this.props.location.state.content}
//                                 </div>
//                             </div>
//                             <div className="detail_hitnum">
//                                 <div className="detail_replynum">
//                                     <div>
//                                         Reply ({this.state.replyNum})
//                                     </div>
//                                 </div>
//                                 <div className="detil_hitnum">
//                                     <div>
//                                         Hit ({ this.props.location.state.hit })
//                                     </div>
//                                 </div>
//                                 <div className="detail_reply">
//                                     <div>
//                                         {Object.key((this.state.replyData)).map((idx)=> {
//                                             const r = this.state.replyData[idx];
//                                             return (
//                                                 <Reply name={r.name}
//                                                         date={r.date}
//                                                         content={r.content} />
//                                             )
//                                         })}
//                                     </div>
//                                     <div style={{ "overflow": "auto" }}>
//                                         <input value={this.state.replySubmitContent}
//                                                 name="replySubmitContent"
//                                                 onChage={this.handleValueChange}
//                                                 className="detail_submitbtn" />
//                                         <div className="detail_btn">
//                                             <button className="detail_btn"
//                                             style={{ "width" : "100%", "height": "100%" }}
//                                             onClick = {this.handleSubmit}>Submit</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p style={{ "disply" : "none" }}>
//                                 {this.props.location.state.id}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )
//         }
//     }
// }

// export default BoardDetail;