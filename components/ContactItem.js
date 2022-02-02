import classnames from "classnames";

export default function ContactItem({ label, value, icon, className }) {

    return(
        <div className={classnames("flex items-start", className)}>
            <img src={icon} className="w-8" />
                <div className="xl:ml-14 md:ml-5">
                    <div className="text-sm font-semibold mb-1">{label}</div>
                    <div className="text-lf font-semibold">{value}</div>
                    <div className="w-6/12">
                </div>
            </div>
        </div>
    );
}