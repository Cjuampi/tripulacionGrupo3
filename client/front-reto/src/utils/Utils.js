import uCookies from 'universal-cookie';

const globalUtils = {
    getCookieToken : () =>{
        const objCookies = new uCookies();
        let token = objCookies.get('userToken');
        return token;
      }
    
}

export default globalUtils;