import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Swal from "sweetalert2";
const clientId =
  "187145886280-d9i93h36eul8b8niphh92ivk3jql61fu.apps.googleusercontent.com"; // Replace with your client ID

export default function GoogleAuth() {
  const handleSuccess = async (response) => {
    const token = response.credential;

    try {
      const res = await axios.post("http://localhost:3000/validate-google", {
        token,
      });
      Swal.fire(res.data.message); // Show success message
    } catch (error) {
      console.error("Authentication failed", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.error("Login Failed")}
      />
    </GoogleOAuthProvider>
  );
}
