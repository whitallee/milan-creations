import React from "react";
import {bool, func} from 'prop-types';

const Burger = ({open, setOpen}) => {
    return (
        <div className='burger' open={open} onClick={() => setOpen(!open)}>
            <img className='burger-icon' src='https://img.icons8.com/?size=512&id=aflTW0mA9OBv&format=png' alt='Menu'/>
        </div>
    );
};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
};

export default Burger;