import "./dashboard.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Crads from "../../components/Cards/Crads";
import Reports from "../../components/Reports/Reports";
import RecentSales from "../../components/Reports/RecentSales";
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
                <div className="col-12">
                  <Reports />
                </div>
                <div className="col-12">
                  <RecentSales />
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
