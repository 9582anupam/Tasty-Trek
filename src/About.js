import User from "./User";

const About = () => {
  return (
    <div className="about p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <User />
    </div>
  );
};

export default About;
