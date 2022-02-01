import Navbar from "./Navbar";
import Button from "./Button";

const intro1 = "I'm a Fullstack Developer with all expiriance in React, Node.js ";
const intro2 = "Since 10 years I have been working on web development and I'm looking for new opportunities.";

export default function Hero() {
    return (
            <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px]">
            <div className="container mx-auto px-10">
                <Navbar />
                    <div className="text-center xl:mt-20 lg:mt-10 md:mt-6 pb-20">
                        <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">{intro1}</h1>
                        <p className="text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">{intro2}</p>
                    <Button href="#profile" pill variant="yellow" className="mt-14">Learn</Button>
                </div>
            </div>
      </div>
    );
}