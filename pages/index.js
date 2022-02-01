import Hero from "../components/Hero";

const p1 = "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,     quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipis lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,     quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipis lorem lorem ipsum dolor sit amet consectetur adipisicing it amet consectetur adipisicing elit. Qui,     quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipis lorem lorem ipsum dolor sit amet consectetur adipisicing";
const p2 = "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam.lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,";

export default function Home() {
  return (
      <>  
          <Hero />

          <section className="py-28">
              <div className="container mx-auto">
                <h2 className="text-2xl font-semibold font-mono text-center">Profile</h2>
                <p className="text-lg mt-2 text-gray-600 text-center">Know more about me..</p>
                <div className="flex items-center w-9/12 mx-auto mt-10">
                  <div className="w-5/12 p-10">
                    <img src="/profile.png" className="w-full" />
                  </div>
                  <div className="w-7/12 px-10">
                      <p className="text-lg leading-relaxed">{p1}</p>
                      <p className="text-lg mt-6 leading-relaxed">{p2}</p>
                  </div>
                </div>
              </div>
          </section>
      </>
    )
}
