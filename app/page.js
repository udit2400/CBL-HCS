import Image from "next/image";
import Navbar from "@/components/Navbar"; // Adjust the path based on your folder structure
import Banner from "@/components/Banner";
import Slider from "@/components/Slider";
import CourseCard from "@/components/CourseCard";
import WhyChooseCBL from "@/components/Details";
import FacultySection from "@/components/Teacher";
import SuccessStory from "@/components/SuccessStory";
import Footer from "@/components/Footer";
import FAQSection from "@/components/Faq";

export default function Home() {
  return (
		<div className="flex flex-col min-h-screen">
			{/* Navbar */}
			<Navbar />

			{/* Banner */}
			<div className="mb-8">
				<Banner />
			</div>

			{/* Slider */}
			<div className="mb-10">
				<Slider />
			</div>

			<div className="mb-10">
				<CourseCard />
			</div>

			<div className="mb-10">
				<WhyChooseCBL />
			</div>

			<div className="mb-10">
				<FacultySection />
			</div>

			<div className="">
				<SuccessStory />
			</div>

			<div className="">
				<FAQSection />
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
}
