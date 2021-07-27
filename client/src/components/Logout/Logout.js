

import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
import '../Logout/Logout.css';

const cookies = new Cookies();


function LogOut() {
  let history = useHistory();

  function handleLogOut() {
    cookies.remove('userToken')
    console.log("cookie borrada")
    window.location = "/login";
  }

  return (
    <button className="logout_button" type="button" onClick={handleLogOut}>
      Log Out
    </button>
  );
}


export default LogOut;