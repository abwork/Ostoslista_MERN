const validate = (values) => {
    const errors = {};

    //check customer name
    if (!values.name) {
        errors.firstName = 'Required';
      } else if (values.name.length < 2 || values.name.length > 25) {
        errors.name = 'Name must be between 2 and 25 characters';
      } else if (!/^[a-zA-Z ]*$/.test(values.name)) {
        errors.name = 'Name must not contain numbers.';
      }
    //check customer email
    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    //check customer country
    if (!values.country) {
        errors.country = 'Required';
      } else if (values.country.length < 3 || values.country.length > 25) {
        errors.country = 'Country must be between 3 and 25 characters';
      } else if (!/^[a-zA-Z ]*$/.test(values.country)) {
        errors.country = 'Country must not contain numbers.';
      } 

    return errors;
};

export default validate;