import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/reset";
import { UserProvider } from "./providers/UserContext";
import { LoadingProvider } from "./providers/LoadingContext";

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
        autoClose={3000}
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
