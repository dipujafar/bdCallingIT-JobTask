import { Helmet } from "react-helmet-async";
import SignUpForm from "./SignUpForm";
import Container from "../../shaerd/Container";
import signImg from "../../assets/image/plants2.png";

const SignUpMain = () => {
  return (
    <div className="text-black min-h-screen  ">
      <Helmet>
        <title>GREENMIND | SignUp</title>
      </Helmet>
      <Container>
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-center items-center">
          <div className="flex-1">
            <SignUpForm></SignUpForm>
          </div>
          <div className="flex-1 ">
            <img src={signImg} alt="farmerImg" className="w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUpMain;
