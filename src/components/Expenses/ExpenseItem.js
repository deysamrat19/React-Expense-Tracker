import React from 'react';
//import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  /*const [title, setTitle] = useState(props.title);

function clickHandler() {
  setTitle('Updated');
  console.log(title);
};*/

/* const clickHandler = () => {
  console.log('Clicked!!!');
}; */

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{ props.title }</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;