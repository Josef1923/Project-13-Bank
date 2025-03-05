import Header from "@comp/layout/header";
import Footer from "@comp/layout/footer";
import SignIn from "@comp/page/login/signin";

function Login() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <SignIn />
      </main>
      <Footer />
    </>
  );
}

export default Login;