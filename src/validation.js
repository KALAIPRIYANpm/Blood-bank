const Validation = (data) => {
    let error = {};
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!data.id) {
      error.id = "Email should not be empty";
    } else if (!email_pattern.test(data.id.trim())){
      error.id = "Invalid email format";
}
  
    if (!data.password) {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(data.password)) {
      error.password = "Invalid password credentials";
    }
  
    return error;
  };
  
  export default Validation;
  