import { Grid } from "@mui/material";
import { InputStyled } from "../../../common/components/Input";

export function FormProfile(){
    return(
        <Grid container alignItems="center" direction="column">
            <Grid item>
                <span>Nome</span>
                <InputStyled name="name"/>
            </Grid>
            <Grid item>
                <span>E-mail</span>
                <InputStyled name="email"/>
            </Grid>
            <Grid item>
                <span>Documento</span>
                <InputStyled name="document"/>
            </Grid>
            <Grid item>
                <span>Telefone</span>
                <InputStyled name="phone"/>
            </Grid>
        </Grid>
    )
}