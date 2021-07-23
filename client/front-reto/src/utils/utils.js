/**
 * 6+ cracteres
 * Validar email
 * @param {string} email The email id
 */
 export const isValidEmail = (email) => {
    let error = '';
    let status = true;
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length < 6) {
      status = false;
      error = 'Password debe ser de al menos 6 caracteres';
    } else if (!re.test(email.toLowerCase())) {
      status = false;
      error = 'El email no es válido';
    }
  
    return { status, error };
  };
  
  /**
   * Min 6 caracteres
   * Al menos una mayúscula
   * @param {string} password The password
   */
  export const isValidPassword = (password) => {
    let error = '';
    let status = true;
    if (password.length < 6) {
      status = false;
      error = 'Password debe ser de al menos 6 caracteres';
    } else if (!password.split('').filter((a) => a >= 'A' && a <= 'Z').length) {
      status = false;
      error = 'Password debe tener al menos una mayúscula';
    }
  
    return { status, error };
  };