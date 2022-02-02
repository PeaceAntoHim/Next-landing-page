import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillCard from "./SkillCard";

export default function SectionSkills() {

    return (
        <section className="py-28 bg-primarygray" id="skills">
            <div className="container mx-auto px-10">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph>These are my some skill in computer..</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    {/* Section Skill 1 */}
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="JavaScript"
                            level="Advanced"
                            image="/javascript.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="React"
                            level="Intermidiate"
                            image="/react.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="NodeJs"
                            level="Advanced"
                            image="/nodejs.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    {/* Section skill 2 */}
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="JavaScript"
                            level="Advanced"
                            image="/react.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="React"
                            level="Intermidiate"
                            image="/javascript.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillCard 
                            name="NodeJs"
                            level="Advanced"
                            image="/nodejs.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    {/* Section Skill 3 */}
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard 
                            name="JavaScript"
                            level="Advanced"
                            image="/react.svg"
                            imageClassName="h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard 
                            name="React"
                            level="Intermidiate"
                            image="/nodejs.svg"
                            imageClassName="h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
                        <SkillCard 
                            name="NodeJs"
                            level="Advanced"
                            image="/javascript.svg"
                            imageClassName="h-16"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}