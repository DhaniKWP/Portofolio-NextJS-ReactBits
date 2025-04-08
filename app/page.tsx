import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent"
import Aurora from "./components/Aurora/Aurora";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#E9F1FA]">
      <div className="absolute top-0 left-0 bottom-0 w-full h-full">
        <Aurora
        colorStops={["#4F0341", "#FFFFFF", "#E9F1FA"]}
        blend={2}
        amplitude={2.0}
        speed={0.5}
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent 
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <h1 className="text-2xl text-[#FFFFFF] font-bold">DKWP</h1>
                    <RotatingText
                    texts={['Web Development', 'Web Programming', 'Backend Development']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#4F0341] text-[FFFFFF] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl font-bold inline-flex transition-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
                </AnimatedContent>
                <div className="flex flex-col items-start">
                  <SplitText
                    text="Hello, I'm Dhani Kusuma Wardana Putra"
                    className="text-3xl font-semibold text-start text-[#4F0341]"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText
                    text="And i'm a Student"
                    className="text-3xl font-semibold text-start text-[#4F0341]"
                    delay={60}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <div>
                  <BlurText
                    text="Saya Dhani Kusuma Wardana Putra, seorang mahasiswa semester 2 di Global Institute yang sedang menempuh pendidikan di jurusan Software Engineering. Saya memiliki ketertarikan mendalam dalam pengembangan perangkat lunak dan teknologi, serta sedang membangun keterampilan saya di bidang pemrograman untuk menciptakan solusi inovatif. Dengan semangat belajar dan dedikasi, saya berkomitmen untuk terus berkembang menjadi seorang software engineer yang kompeten dan profesional."
                    delay={75}
                    animateBy="words"
                    direction="top"
                    className="text-xl mb-8 text-[#4F0341] justify-between"
                  />
                </div>
            </div>
            </div>
          </div>
            <div className="col-span-6">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]}/>
            </div>
        </div>
      </div>
    </div>
  );
}
