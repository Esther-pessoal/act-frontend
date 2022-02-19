import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputContext from "../../common/contexts/InputContext";
import { FormScreen } from "../Screens/FormScreen";

export function FormContainer(){
    const [step, setStep] = useState(1);
    const {handleSubmit} = useFormContext();

    function onSubmit(data: any){
        if(step == 1){
            setStep(2)
            return
        }
        localStorage.setItem("@profile", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormScreen step={step}/>
        </form>      
    )
}