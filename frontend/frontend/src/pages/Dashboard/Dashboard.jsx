import "./dashboard.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Crads from "../../components/Cards/Crads";
const Dashboard = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main id="main" className="main dashboard-main">
        <section className="dashboard section">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <Crads />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
