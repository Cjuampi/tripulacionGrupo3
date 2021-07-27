import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

const FormInput = ({
  className, value, onChange, type, error, success, ...props
}) => (
  <div data-test="form-input" className="form-input margin-vertical-lg">
    <input className={`padding-xs ${error ? 'input-error' : ''} ${success ? 'input-success' : ''} ${className}`} value={value} onChange={onChange} type={type} {...props} />
    {error ? <div data-test="form-input-message" className="red-text text-left form-input-message">{error}</div> : null}
  </div>
);

FormInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  success: PropTypes.bool,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  error: '',
  success: false,
  className: '',
};

export default FormInput;