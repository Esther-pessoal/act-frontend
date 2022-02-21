import React, { ReactNode } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemValidation } from "../../Profile/types";

export default function InputContext({children}: {children:ReactNode}) {
  const methods = useForm({
    resolver: yupResolver(schemValidation),
  });

  return (
    <FormProvider {...methods} > {children} </FormProvider>
  );
}