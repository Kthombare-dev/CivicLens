import Navbar from "@/components/Navbar";
import ComplaintForm from "@/components/ComplaintForm";
import Footer from "@/components/Footer";

const Complaint = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ComplaintForm />
      <Footer />
    </div>
  );
};

export default Complaint;

