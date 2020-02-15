import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButon from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {getTodoList} from '../actions/todoAction';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.getTodoList()
  }

  renderEvents() {
    return _.map(this.props.events, todo => (
        <TableRow key={todo.id}>
          <TableRowColumn>{todo.id}</TableRowColumn>
          <TableRowColumn>
            <Link to={`/events/${todo.id}`}>
              {todo.title}
            </Link>
          </TableRowColumn>
          <TableRowColumn>{todo.detail}</TableRowColumn>
        </TableRow>
    ))
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }

    return (
        <React.Fragment>
          <FloatingActionButon style={style} containerElement={<Link to="/events/new"/>}>
            <ContentAdd/>
          </FloatingActionButon>

          <Table>
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>タイトル</TableHeaderColumn>
                <TableHeaderColumn>詳細</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false}>
              {this.renderEvents()}
            </TableBody>
          </Table>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({events: state.events})

const mapDispatchToProps = ({getTodoList})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);