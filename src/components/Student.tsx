import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import PropTypes from 'prop-types'
const Student = (props: {
    isStudent: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; age: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
}) => {
  return (
    <div className="student">
      <p>Name :{props.name}</p>
      <p>Age :{props.age}</p>
      <p>IS Student :{props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
Student.propTypes = {
name:PropTypes.string,
age:PropTypes.number,
IsStudent:PropTypes.bool,
};
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student