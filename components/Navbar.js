import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center py-10">
                <div className="w-3/12">
                    <Logo />
                </div>
                <div className="w-6/12 hidden md:block">
                    <Nav dir="horizontal" scheme="light"/>
                </div>
                <div className="w-3/12 text-right hidden md:block">
                    <Button href="#contact" pill variant="outline-yellow">Contact</Button>
                </div>
                <div className="w-9/12 md:hidden text-right">
                    <img src="/menu.svg" className="inline-block" />
                </div>
            </div>

            <div className="fixed bg-white z-10 right-0 top-0 h-full w-full p-10">
                <Nav
                    scheme="dark"
                    dir="veritcal"
                />
            </div>
        </>
    );
}