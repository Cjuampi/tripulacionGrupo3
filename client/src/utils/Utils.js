import uCookies from 'universal-cookie';

const globalUtils = {
  getCookieToken: (nameCookie) => {
    const objCookies = new uCookies();
    let token = objCookies.get(nameCookie);
    if (token) {
      return token;
    } else {
      return '';
    }
  },
  checkEmail: (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
  },
  checkPass: (pass) => {
    return (/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/.test(pass))
  },
  matchPass: (pass1, pass2) => {
    return (pass1 === pass2)
  },
  maxLengthEmail:(email)=>{
    return (email.length < 46 )
  }

}

export default globalUtils;