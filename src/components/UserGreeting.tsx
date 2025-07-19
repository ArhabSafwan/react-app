import React from "react";
import PropTypes from 'prop-types'
const UserGreeting = (props: any) => {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.name}</h2>
  );
  const promptLogin = <h2 className="prompt-login">Please login</h2>;
  return props.isUserLogged ? welcomeMessage : promptLogin;
};
UserGreeting.prototype = {
    isUserLogged:PropTypes.bool,
    name:PropTypes.string,
}
export default UserGreeting;
