import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reply from './Reply';
import { Redirect } from 'react-router-dom';

import myFireBase from '../../config/MyFireBase';
import { object } from 'prop-types';

const databaseRef = (new myFireBase).databaseRef;

class BoardDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            replyData: {},
            replySubmitContent: '',
            replyNum: 0
        }
    }

    componentDidMount(){
        this.getReplyData();
    }

    getReplyData() {
        databaseRef.chile('reply/').once('value').then(data=> {
            this.setState({
                replyData: this.filterReplyData(data.val(),
                this.props.location.state.id)
            })
        })
    }

    postReplyData(reply) {
        let postData ={
            boardId: reply.boardId,
            content: reply.content,
            name: reply.name,
            date: reply.date
        }
        let postKey = databaseRef.child('reply/').push().key;
        let updates = {};
        updates['/reply/'+postKey] = postData;
        databaseRef.update(updates);
        this.getReplyData();
    }

    filterReplyData = (totalReplyData, boardId) => {
        let filteredReply = [];
        let replyNum = 0;
        object.key(totalReplyData).map((idx) => {
            const r = totalReplyData[idx];
            if(r.boardId === boardId){
                filterReplyData.push(r);
                replyNum += 1;
            }
        })
        this.setState({
            replyNum: replyNum
        });
        return filteredReplyData;
    }
}
