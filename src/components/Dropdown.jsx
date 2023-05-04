import React from "react";
import {bool, func} from 'prop-types';
import Droppeddown from "./Droppeddown";

const Dropdown = ({openD, setOpenD}) => {
    return (
        <div className='dropdown' openD={openD} onClick={() => setOpenD(!openD)}>
            <li>
                Products <span style={{display: openD ? 'inline' : 'none'}}>&#9662;</span><span style={{display: openD ? 'none' : 'inline'}}>&#9656;</span>
                <Droppeddown openD={openD}/>
            </li>
        </div>
    );
};

Dropdown.propTypes = {
    openD: bool.isRequired,
    setOpenD: func.isRequired
};

export default Dropdown;