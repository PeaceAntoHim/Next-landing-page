import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ProjectItem from "./ProjectItem";

export default function SectionProjects() {
    return (
        <section className="py-28" id="projects" >
            <div className="container mx-auto px-10">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph>These are project i create..</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-6/12 w-full px-4 pb-12">
                        <ProjectItem 
                            name="Hasten"
                            description="Explore landing page of hastan"
                            image="/hasten.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-12">
                        <ProjectItem 
                            name="Resources"
                            description="Explore landing page of resources"
                            image="/resources.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-12">
                        <ProjectItem 
                            name="Resources"
                            description="Explore landing page of resources"
                            image="/resources.png"
                            />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-12">
                        <ProjectItem 
                            name="Hasten"
                            description="Explore landing page of hastan"
                            image="/hasten.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );  
}