import PropTypes from 'prop-types'
const FormInput = ({placeholder,onChange,type}) =>{
  return(
    <input
      placeholder={placeholder}
      onChange={onChange}
      type={type}
  ></input>
  );
}

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
export default FormInput