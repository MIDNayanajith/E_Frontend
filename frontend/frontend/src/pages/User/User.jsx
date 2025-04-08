import "./user.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
const User = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main user-main">
        <div className="dashboard">
          <h1>This is User</h1>
        </div>
      </main>
    </>
  );
};

export default User;
