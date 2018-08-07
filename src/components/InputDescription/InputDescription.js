import React from 'react';

/*
Can't do the following at the moment due to
https://github.com/webpack-contrib/sass-loader/issues/206
and
https://github.com/danedavid/react-redux-boilerplate/issues/1
import style from './style.css';

And then in the code you would have
<theElement className={style.theStyle}></theElement>
*/
import './style.css';

export default function InputDescription (props) {
  return (
    <label className="InputDescription-description">{props.description}</label>
  );
}