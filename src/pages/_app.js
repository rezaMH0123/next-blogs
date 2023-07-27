import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Toaster />
    </AuthProvider>
  );
}

export default App;
