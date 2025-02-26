import Header from "@comp/layout/header";
import Footer from "@comp/layout/footer";
import WelcomeMessage from "@comp/page/userDashboard/welcome";
import Notification from "@comp/page/userDashboard/notification";

function UserDashboard() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <WelcomeMessage /> 
        <h2 className="sr-only">Accounts</h2>
        <Notification/>
        <Notification/>
        <Notification/>
        </main>      
      <Footer />
    </>
  );
}

export default UserDashboard;