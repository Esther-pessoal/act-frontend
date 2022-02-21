import { Button, Grid } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputContext from "../../common/contexts/InputContext";
import { FormScreen } from "../Screens/FormScreen";

export function FormContainer(){
    const [step, setStep] = useState(1);
    const {handleSubmit} = useFormContext();
    const {enqueueSnackbar} = useSnackbar();

    function onSubmit(data: any){
        if(step == 1){
            setStep(2)
            return
        }
        localStorage.setItem("@profile", data);
        enqueueSnackbar("Salvo com sucesso");
    }

    return (
        <Grid container direction="column" alignItems="center">
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormScreen step={step}/>
            <Button variant="contained" type="submit"></Button>
        </form>    
        </Grid>  
    )
}