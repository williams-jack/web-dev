import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();
    const tuitClickHandler = (e) => {
        dispatch({ type: "create-tuit", tuit: whatsHappening });
        setWhatsHappening("");
    };
    return (
        <div className="form-group row mb-2">
            <div className="col-10">
                <textarea
                    value={whatsHappening}
                    onChange={(event) => setWhatsHappening(event.target.value)}
                    className="form-control"
                ></textarea>
            </div>
            <div className="col-2">
                <button onClick={tuitClickHandler} className="btn btn-primary">
                    Tuit
                </button>
            </div>
        </div>
    );
};
export default WhatsHappening;
