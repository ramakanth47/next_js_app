import Navbar from "../../components/Navbar";
import {Footer} from "../../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main style={{ textAlign: "center", padding: "50px" }}>
        <h2>Contact Me</h2>
        <p>Email: rohan@example.com</p>
      </main>
      <Footer />
    </div>
  );
}
