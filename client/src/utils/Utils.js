import uCookies from 'universal-cookie';

const globalUtils = {
    getCookieToken : (nameCookie) =>{
        const objCookies = new uCookies();
        let token = objCookies.get(nameCookie);
        if (token){
          return token;
        }else{
          return '';
        }
        
      }
    
}

export default globalUtils;