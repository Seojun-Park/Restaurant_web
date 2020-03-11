import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Media from 'react-media';
// import { Slide } from '@material-ui/core';

import './Board.css'

const databaseURL = 'https://lunchbox-e853c.firebaseio.com/'
var totalBoardData= {};

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            boardData: {},
            page:0,
            rowsPerPage: 10,
            emptyRows: 0,
            searchKeyword: '',
        }
    }

    componentDidMount() {
        this.getBoardData();
    }

    getBoardData() {
        fetch(`${databaseURL}/board.json`)
        .then(res => {
            if (res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then (res =>{
            totalBoardData = res
            this.setState({
                boardData : totalBoardData.slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
            })}
        )}

    handleChangeValue = (e) => {
        this.setState({
            searchKeyword : e.target.value
        });
        let slicedData = totalBoardData.slice(
            this.state.page * this.state.rowsPerPage,
            this.state.page * this.state.rowsPerPage + this.state.rowsPerPage);
        let filteredData = slicedData.filter((b) => {
            return b.title.indexOf(e.target.value) > -1;
        });
        this.setState({
            boardData: filteredData
        });
        this.setState({
            emptyRows: this.state.rowsPerPage - filteredData.length
        });
    }

    handleChangePage = (event, newPage) => {
        this.setState({
            page : newPage
        });
        this.setState({
            searchKeyword: ''
        });
        let slicedData = totalBoardData.slice(
            newPage * this.state.rowsPerPage,
            newPage * this.state.rowsPerPage + this.state.rowsPerPage);
        this.setState({
            boardData: slicedData
        })
        this.setState({
            emptyRows: this.state.rowsPerPage - slicedData.length
        });
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({ page : 0 });
        this.setState({ rowsPerPage:parseInt(event.target.value, 10) });
        this.setState({ searchKeyword: '' });
        let slicedData = totalBoardData.slice(0, parseInt(event.target.value, 10));
        this.setState({ boardData: slicedData });
        this.setState({ emptyRows: parseInt(event.target.value, 10) - slicedData.length });
    }

    render() {
        return (
            <div>
                <div className="boardTop">
                    <div className="boardTop_back" />
                    <img src="https://images.unsplash.com/photo-1442033025416-c6a7da752d71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1359&q=80" alt="text" className="boardTop_img" />
                    <div className="boardTop_text">
                        Notice of this
                    </div>
                </div>
                <div>
                    {/* search toolbar */}
                    <Toolbar>
                        <div className="search" style={{'width': '30%'}}>
                            <div>
                                <SearchIcon className="searchIcon" /></div>
                                <InputBase 
                                        placeholder="Search"
                                        className="inputRoot"
                                        inputProps={{ 'aria-label': 'search'}}
                                        name = "search Keyword"
                                        value ={this.state.searchKeyword}
                                        onChange={this.handleChangeValue}/>
                        </div>
                    </Toolbar>
                    <Media query="(max-width: 960px)">
                        {matches =>
                            matches ? (
                                <Table className="table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="table_header">#</TableCell>
                                            <TableCell className="table_header">Title</TableCell>
                                            <TableCell className="table_header">Created by</TableCell>
                                            <TableCell className="table_header">Created Date</TableCell>
                                            <TableCell className="table_header">Hit</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Object.keys(this.state.boardData).map(idx => {
                                            const b = this.state.boardData[idx];
                                            return (
                                                <TableRow   className="table_row"
                                                            key ={b.id}
                                                            component={Link} to={{pathname:"/board/detail",
                                                            state: {
                                                                id: b.id,
                                                                title: b.title,
                                                                content: b.content,
                                                                createdby: b.createdby,
                                                                createdDate: b.createdDate,
                                                                hit:b.hit,
                                                            }
                                                        }} >
                                                            <TableCell className="table_body">{b.id}</TableCell>
                                                            <TableCell className="table_body">{b.title}</TableCell>
                                                            <TableCell className="table_body">{b.createdby}</TableCell>
                                                            <TableCell className="table_body" >{b.createdDate}</TableCell> 
                                                            <TableCell className="table_body" >{b.hit}</TableCell>
                                                        </TableRow>)
                                        })}
                                        {this.state.emptyRows > 0 && (
                                            <TableRow style={{ height:46.34 * this.state.emptyRows}}>
                                                <TableCell colSpan={3} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            ) : (
                                <Table className="table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="table_header" style={{ width: "5%" }}>#</TableCell>
                                            <TableCell className="table_header" style={{ width: "70%" }}>Title</TableCell>
                                            <TableCell className="table_header" style={{ width: "10%" }}>Created by</TableCell>
                                            <TableCell className="table_header" style={{ width: "10%" }}>Created Date</TableCell>
                                            <TableCell className="table_header" style={{ width: "5%" }}>Hit</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        Object.keys((this.state.boardData)).map(idx => {
                                        const b = this.state.boardData[idx];
                                        return (
                                            <TableRow 
                                                className="table_row"
                                                key={b.id} 
                                                component={Link} to={{
                                                pathname: "/board/detail",
                                                state: {
                                                    id: b.id,
                                                    title: b.title,
                                                    content: b.content,
                                                    createdby: b.createdby,
                                                    createdDate: b.createdDate,
                                                    hit: b.hit,
                                                }
                                                }} >
                                                <TableCell className="table_body" >{b.id}</TableCell>
                                                <TableCell className="table_body" >{b.title}</TableCell>
                                                <TableCell className="table_body" >{b.createdby}</TableCell>
                                                <TableCell className="table_body" >{b.createdDate}</TableCell>
                                                <TableCell className="table_body" >{b.hit}</TableCell>
                                            </TableRow>)
                                    })}
                                    {this.state.emptyRows > 0 && (
                                        <TableRow style={{ height: 50.91 * this.state.emptyRows }}>
                                        <TableCell colSpan={5} />
                                        </TableRow>
                                    )}
                                    </TableBody>
                                </Table>
                                )
                            }
                    </Media>
                    <TableFooter>
                        <TableRow >
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 50]}
                            colSpan={5}
                            count={totalBoardData.length}
                            rowsPerPage={this.state.rowsPerPage}
                            page={this.state.page}
                            SelectProps={{
                            inputProps: { 'aria-label': 'Rows per page' },
                            native: true,
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                        </TableRow>
                    </TableFooter>
                </div>
            </div>
        )
    }
}

export default Board;