import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import {Fab, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {getTodoList} from '../actions/TodoAction';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodoList()
  }

  render() {
    const {todoList} = this.props.events;
    const style = {
      position: "fixed",
      right: 36,
      bottom: 36
    }

    return (
        <React.Fragment>
          <Fab size="medium" aria-label="add" style={style} component={Link} to="/new">
            <AddIcon/>
          </Fab>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>件名</TableCell>
                <TableCell>詳細</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                (todoList) ?
                    todoList.map(todo => (
                        <TableRow key={todo.id}>
                          <TableCell>
                            <Link to={`/detail/${todo.id}`}>
                              {todo.title}
                            </Link>
                          </TableCell>
                          <TableCell>{todo.detail}</TableCell>
                        </TableRow>
                    ))
                    : null
              }
            </TableBody>
          </Table>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({events: state.events})

const mapDispatchToProps = ({getTodoList})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);