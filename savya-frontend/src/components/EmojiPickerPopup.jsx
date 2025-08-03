import {useState} from "react";

const EmojiPickerPopup= ({icon}) =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
            <div
                onClick={() => setIsOpen(true)}
                className="flex items-center gap- 4 cursor-pointer ">
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-purple-500 rounded-lg">
                    {icon ? (
                        <img src={icon} alt="Icon" className="w-12 h-12"/>
                    ):(
                        <Image />
                    )}
                    <p>{icon ? "Change icon" : "PickICon"}</p>
                </div>

            </div>

        </div>

    )
}

export default EmojiPickerPopup;