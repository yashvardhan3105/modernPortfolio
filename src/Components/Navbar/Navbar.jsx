import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_logo">
        <h1 className="logo">
          <a href="/">YV.</a>
        </h1>
      </div>
      <div className="navbar_resumeContact">
        <a
          target="blank_"
          href="https://drive.google.com/file/d/18rz3YVk_hDhtoJW9AxARkN2bR6PUVlCp/view"
        >
          Resume
        </a>
        <div>
          <a href="mailto:vardhan.yash3105@gmail.com">Mail Me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
