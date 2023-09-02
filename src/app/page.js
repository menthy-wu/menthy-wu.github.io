import About from "@/components/home/About";
import Landing from "@/components/home/Landing";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Landing />
      <About />
      <Projects />
    </div>
  );
}
