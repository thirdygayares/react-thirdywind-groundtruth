import DialogComponent from "@components/DialogComponent";
import { useState } from "react";

const DialogPage = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="p-4">
            <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => setVisible(true)}
            >
                Open Dialog
            </button>

            <DialogComponent visible={visible} onClose={() => setVisible(false)}  >
                <div className="bg-white p-5 rounded-sm ">
                    <p className="text-gray-800">Hello from Dialog!</p>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                        onClick={() => setVisible(false)}
                    >
                        Close
                    </button>
                </div>
            </DialogComponent>
        </div>
    );
};

export default DialogPage;
