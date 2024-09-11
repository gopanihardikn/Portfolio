import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">System Administrator & Programmer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Hardik Gopani</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              <b>Certified:</b> CompTIA Network+ and Microsoft: Azure Administrator Associate
            </p>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at managing and supporting IT systems, ensuring seamless and secure operations across networks.
              As a System Administrator, I bring a strong foundation in IT support, coupled with a solid understanding of programming languages
              to enhance and automate various tasks, contributing to efficient and elegant digital solutions.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume/resume.pdf"
                download
                className="uppercase flex items-center gap-2"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
