import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import {
  normalizeCepNumber,
  normalizeCpfNumber,
  normalizePhoneNumber,
} from "../../masks";

type FormValues = {
  name: string;
  lastName: string;
  email: number;
  phone: string;
  role: string;
  cep: string;
  id: string;
  userName: string;
  password: string;
  cpf: string;
};

export function EmployeePage() {
  const [employeeList, setEmployeeList] = useState([] as FormValues[]);
  const { register, handleSubmit, watch, setValue } = useForm<FormValues>();

  const phoneValue = watch("phone");
  const cepValue = watch("cep");
  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    setValue("cep", normalizeCepNumber(cepValue));
  }, [cepValue]);

  useEffect(() => {
    setValue("cpf", normalizeCpfNumber(cpfValue));
  }, [cpfValue]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setEmployeeList((value) => [...value, data]);
  };

  return (
    <div id={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome"
          {...register("name", { required: true, min: 2, maxLength: 20 })}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          {...register("lastName", { required: true, min: 2, maxLength: 50 })}
        />
        <input
          type="text"
          placeholder="CPF"
          {...register("cpf", { required: true, min: 14, maxLength: 14 })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Celular"
          {...register("phone", { required: true, maxLength: 11 })}
        />
        <select
          className={styles.select}
          {...register("role", { required: true })}
        >
          <option value="Vendedor">Vendedor</option>
          <option value="Entregador">Entregador</option>
          <option value="Gerente">Gerente</option>
        </select>
        <input
          type="string"
          placeholder="CEP"
          {...register("cep", { required: true, maxLength: 9, minLength: 9 })}
        />
        <input
          type="text"
          placeholder="ID"
          {...register("id", { required: true })}
        />
        <input
          type="text"
          placeholder="Nome de usuário"
          {...register("userName", { required: true })}
        />
        <input
          type="password"
          placeholder="Senha"
          {...register("password", { required: true, min: 4 })}
        />

        <button type="submit" className={styles.button}>
          Cadastar
        </button>
      </form>

      <div className={styles.list}>
        <ul>
          {employeeList.map((value) => {
            return <li key={value.id}>{`${value.name} ${value.email}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
