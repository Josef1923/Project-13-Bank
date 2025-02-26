import Header from "@comp/layout/header";
import Footer from "@comp/layout/footer";
import WelcomeMessage from "@comp/page/userDashboard/welcome";

function UserDashboard() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <WelcomeMessage />  
        </main>      
      <Footer />
    </>
  );
}

export default UserDashboard;