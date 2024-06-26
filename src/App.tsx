import "./App.css";
import axios from "axios";

function App() {
  const auth = {
    merchantId: "863990743500270",
    pubKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArMpFdvQUMXtWo9hDwDgK
xFGCaOPozbtsf29vrPE11wCEXLvLGebaKY1mrBN2ZPaHXzh3SaP5xoRKQofuG3sY
VwBLTBNrrhL7hAIopmc0TFUnEAiD7JItS0rUCQ3oriGDVfD0jnbuTi0XBL4lM2w9
7FBx0s4rRv9nfwmU9eSwP0fusxdb316oU61/vWXTLeQa7FLx8H25FpN+8Tlx+Z0e
svdiGWDYbtP/Fb9ktIOaS3dYc1QFzmpQlfPX+azoKbSXA3uIDngubS9io/egcpkR
Jfbu/fpKdlndVqIJgGiGoz+4TBQatNp3bkfpLn612XZn6XXEjzmMgx40T3CV22TC
OwIDAQAB
-----END PUBLIC KEY-----`,
    purchaseId: "1",
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://3dsecure.bob.bt/3dss/mkReq",
        auth,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
