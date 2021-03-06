import { Props } from "./types";
import { Input} from "@mui/material"
import { Controller, useFormContext } from "react-hook-form";

export function InputStyled(props: Props) {
    const { control,
    formState: {errors} 
} = useFormContext();
    return (
        <> 
        <Controller
        name={props.name}
        control={control}
        defaultValue={!!props.default ? props.default : ""}
        render={({ field }) => <Input {...field} data-test={`input-${props.name}`}/>}
      />
    <p>{errors[props.name]?.message}</p>
    </>
    );
}