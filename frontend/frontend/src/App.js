import "./App.css";
//import bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MyRoutes from "./components/Routes/MyRoutes";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/* <Header />
      <Sidebar /> */}
      <MyRoutes />
    </>
  );
}

export default App;
