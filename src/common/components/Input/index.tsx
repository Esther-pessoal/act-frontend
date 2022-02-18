import { Props } from "./types";
import { Input} from "@mui/material"
import { useForm } from "react-hook-form";



export function InputStyled(props: Props){
    const {register, formState: {errors}} = useForm()
    return (
        <> <Input 
    {...register(props.name)}
    data-test={`input-${props.name}`}
    type={!!props.type ? props.type : "string"}
    />
    <p>{errors[props.name]?.message}</p>
    </>
    );
}