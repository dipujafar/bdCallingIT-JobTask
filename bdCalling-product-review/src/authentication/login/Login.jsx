import { Helmet } from "react-helmet-async";
import Container from "../../shaerd/Container";
import LoginFrom from "./LoginFrom";
import loginImg from "../../assets/image/plants2.png";

const Login = () => {
  return (
    <div className="text-black min-h-screen  ">
      <Helmet>
        <title>FarmEr | Login</title>
      </Helmet>
      <Container>
        <div className="w-full flex flex-col gap-3 md:flex-row justify-center items-center">
          <div className="flex-1">
            <LoginFrom></LoginFrom>
          </div>
          <div className="flex-1">
            <img src={loginImg} alt="farmerImg" className="w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
