import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';
import {deleteTodo, getTodo, updateTodo} from '../actions/TodoAction';

class TodoDetail extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    if (id) this.props.getTodo(id)
  }

  renderField(field) {
    const {input, label, type, meta: {touched, invalid, error}} = field;
    return (
        <TextField
            style={{margin: 12}}
            label={label}
            type={type}
            error={touched && invalid}
            helperText={touched && invalid && error}
            {...input}
            fullWidth={true}
        />
    )
  }

  async onDeleteClick() {
    const {id} = this.props.match.params;
    await this.props.deleteTodo(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    await this.props.updateTodo(values)
    this.props.history.push('/')
  }

  render() {
    const {handleSubmit, pristine, submitting, invalid} = this.props;
    const style = {margin: 12}

    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="件名" name="title" type="text" component={this.renderField}/>
            <Field label="詳細" name="detail" type="text" component={this.renderField}/>
          </div>

          <div>
            <Button variant="outlined" type="submit" style={style}
                    disabled={pristine || submitting || invalid}>更新</Button>
            <Button variant="outlined" component={Link} to="/">キャンセル</Button>
            <Button variant="outlined" style={style} onClick={this.onDeleteClick}>削除</Button>
          </div>
        </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "件名を入力してください。"
  if (!values.detail) errors.detail = "詳細を入力してください。"

  return errors
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return {initialValues: event, event}
}

const mapDispatchToProps = ({deleteTodo, getTodo, updateTodo});

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({validate, form: 'eventShowForm', enableReinitialize: true})(TodoDetail)
);