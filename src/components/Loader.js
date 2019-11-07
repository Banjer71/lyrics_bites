import React from 'react'

const Loader = (props) => {
    return (
        <div className='loader'>
            <div className='loader-spin'>{props.message}</div>
        </div>
    );
}

Loader.defaultProps = {
    message: 'Loading...'
};
export default Loader