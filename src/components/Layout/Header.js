import React, { Fragment } from 'react'
import mealsImage from '../../asset/meals.jpg'
import classes from './header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
   <Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src= {mealsImage}/>
    </div>
   </Fragment>
  )
}

export default Header