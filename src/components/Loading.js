import React from 'react';
import  '../styles/spinner.css'

const Loading = (props) => {
    return (
        <div>
        {props.active &&
            <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
        }
        </div>
        
    );
};

export default Loading;