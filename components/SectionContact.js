import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ContactItem from "./ContactItem";
import Field from "./Field";
import Button from "./Button";

export default function SessionContact() {
    return (
        <section classname="contact mx-auto px-10" id="contact">
            <div className="bg-primarygray flex rounded-lg flex-wrap">
                <div className="md:w-6/12 w-full md:border-r borded-b border-primarygray-200">
                    <div className="lg:py-16 lg:px-20 md:p-12 p-10">
                    <SectionTitle left>Contact</SectionTitle>
                    <SectionParagraph left>You can contact me in this below information..</SectionParagraph>

                    <ContactItem 
                        label="Email"
                        value="stefanusfranssebastian@gmail.com"
                        icon="/mail.svg"
                        className="mt-10"
                    />
                    <ContactItem 
                        label="Phone"
                        value="085217095294"
                        icon="/phone.svg"
                        className="mt-6"
                    />
                    <ContactItem 
                        label="Twitter"
                        value="Frans Sebastian"   
                        icon="/twitter.svg"
                        className="mt-6"
                    />
                    </div>
                </div>
                <div className="md:w-6/12 w-full">
                        <form action="submit" className="lg:py-16 lg:px-20 md:p-12 p-10">
                            <div className="flex flex-wrap -mx-4">
                                <div className="lg:w-6/12 w-full px-4">
                                    <Field 
                                        label="Name"
                                        name="name"
                                        type="text"
                                    />
                                </div>
                                <div className="lg:w-6/12 w-full px-4">
                                    <Field 
                                        label="Email"
                                        name="email"
                                        type="email"
                                    />
                                </div>
                            </div>
                                <Field 
                                    label="Subject"
                                    name="subject"
                                    type="text"
                                />
                                <Field 
                                    label="Message"
                                    name="message" 
                                    type="textarea"
                                    clsName="h-40"
                                />
                                <div className="text-right">
                                <Button variant="black">Send</Button>
                                </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }