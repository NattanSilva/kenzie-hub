import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingProvider } from "./providers/LoadingContext";
import { UserProvider } from "./providers/UserContext";
import RoutesMain from "./routes";
import { GlobalStyle } from "./styles/reset";

function App() {
  return (
    <>
      <GlobalStyle />
      <LoadingProvider>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </LoadingProvider>

      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
