import { FormName, FormProfile } from "../../Components";
import { Props } from "./types";

export function FormScreen(props: Props){
    return(
        <>        
        {
            props.step == 1 && <FormName/>
        }
        {
            props.step == 2 && <FormProfile/>
        }
    </>
    );
}