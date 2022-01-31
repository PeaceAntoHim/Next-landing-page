import Nav from '../components/Nav';
import Logo from '../components/Logo';
import Button from '../components/Button';


const intro1 = "I'm a Fullstack Developer with all expiriance in React, Node.js ";
const intro2 = "Since 10 years I have been working on web development and I'm looking for new opportunities.";

export default function Home() {
  return (
      <>
          <div className="bg-blue-500">
            <div className="container mx-auto">
              <div className="flex items-center">
                <div className="w-3/12">
                  <Logo />
                </div>
                <div className="w-6/12">
                  <Nav />
                </div>
                <div className="w-3/12 text-right">
                  <Button variant="outline-yellow">Contact</Button>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto">{intro1}</h1>
                  <p className="text-white text-opacity-50 text-lg w-4/12 mx-auto mt-8">{intro2}</p>
                  <Button variant="yellow" className="mt-12">Learn</Button>
              </div>
            </div>
          </div>
      </>
  )
}
