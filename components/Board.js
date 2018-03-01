import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className='board'>
        {board.map((field, i) => {
          return <Field player={field} onClick={onClick.bind(null, i)} key={i} />;
        })}
      </div>
    );
  }
}
