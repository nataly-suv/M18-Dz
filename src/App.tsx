import { RouterProvider } from "react-router-dom";
import "./App.css";
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
import router from "./router";

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <div className="content">контент</div>
    //   <Footer />
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;
