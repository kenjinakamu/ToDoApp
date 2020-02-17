import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';
import {createTodo} from '../actions/TodoAction';

class TodoCreate extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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

  async onSubmit(values) {
    await this.props.createTodo(values)
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
          <Button variant="outlined" type="submit" style={style}
                  disabled={pristine || submitting || invalid}>登録</Button>
          <Button variant="outlined" component={Link} to="/">キャンセル</Button>
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
const mapDispatchToProps = ({createTodo})

export default connect(null, mapDispatchToProps)(
    reduxForm({validate, form: 'todoCreateForm'})(TodoCreate)
);