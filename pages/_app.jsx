import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import "../style/App.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
