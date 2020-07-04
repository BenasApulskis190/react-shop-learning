import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handdleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className="form-input" onChange={handdleChange}  {...otherProps} />
        {
            label 
            ? (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`} htmlFor="">
                label
            </label>)
            : null
        }
    </div>
);

export default FormInput;