import User from "./User";
import UserClass from "./UserClass";

export default About = () => {
  return (
    <h1>
      About Namaste React
      <User />
      <UserClass name={"Abhishek (class)"} location={"Ahmedabad"} />
    </h1>
  );
};
