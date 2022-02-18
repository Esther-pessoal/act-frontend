import { Props } from "./types";
import { Input} from "@mui/material"
import { useForm } from "react-hook-form";
import InputContext from "../../contexts/InputContext";



export function InputStyled(props: Props){
    const {register, formState: {errors}} = useForm()
    return (
        <InputContext> 
        <Input
        {...register(props.name)}
        data-test={`input-${props.name}`}
        type={!!props.type ? props.type : "string"}
        />
    <p>{errors[props.name]?.message}</p>
    </InputContext>
    );
}