/* eslint-disable */
import React from 'react'

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.complete} />
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
