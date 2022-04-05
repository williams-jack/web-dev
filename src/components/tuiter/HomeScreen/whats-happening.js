import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTuit } from "../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState({ tuit: "" });
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        createTuit(dispatch, whatsHappening);
        setWhatsHappening({ tuit: "" });
    };
    return (
        <div className="form-group row mb-2">
            <div className="col-10">
                <textarea
                    value={whatsHappening.tuit}
                    onChange={(event) =>
                        setWhatsHappening({
                            ...whatsHappening,
                            tuit: event.target.value,
                        })
                    }
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
