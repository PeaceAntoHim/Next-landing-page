import Navbar from "./Navbar";
import Button from "./Button";

const intro1 = "I'm a Fullstack Developer with all expiriance in React, Node.js ";
const intro2 = "Since 10 years I have been working on web development and I'm looking for new opportunities.";

export default function Hero() {
    return (
        <div className="bg-hero h-[712px]">
            <div className="container mx-auto">
                <Navbar />
                    <div className="text-center mt-20">
                        <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto leading-relaxed">{intro1}</h1>
                        <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6 leading-relaxed">{intro2}</p>
                    <Button pill variant="yellow" className="mt-14">Learn</Button>
                </div>
            </div>
      </div>
    );
}