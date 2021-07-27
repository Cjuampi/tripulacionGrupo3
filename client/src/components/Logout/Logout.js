

import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import '../Logout/Logout.css';

const cookies = new Cookies();


function LogOut() {
  let history = useHistory();

  function handleLogOut() {
    cookies.remove('userToken')
    cookies.remove('userEmail')
    cookies.remove('userName')
    /* console.log("cookie borrada") */
    window.location = "/";
  }

  return (
    <button className="logout_button" type="button" onClick={handleLogOut}>
      Log Out
    </button>
  );
}


export default LogOut;