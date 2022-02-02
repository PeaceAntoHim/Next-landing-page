const p1 = "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,     quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipis lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,     quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipis lorem lorem ipsum dolor sit amet consectetur adipisicing it amet consectetur adipisicing elit. Qui,     quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipis lorem lorem ipsum dolor sit amet consectetur adipisicing";
const p2 = "lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam.lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam. lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,";

import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";

export default function SesseionProfile() {
    return (
        <section className="py-28" id="profile">
            <div className="container mx-auto px-10">
            <SectionTitle>Profile</SectionTitle>
            <SectionParagraph>Know more about me..</SectionParagraph>

            <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
                <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
                <img src="/profile.png" className="w-full" />
                </div>
                <div className="md:w-7/12 w-full px-10">
                    <p className="text-lg leading-relaxed">{p1}</p>
                    <p className="text-lg mt-6 leading-relaxed">{p2}</p>
                </div>
            </div>
            </div>
        </section>
    );
}