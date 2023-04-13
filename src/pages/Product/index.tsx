import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { normalizeDate } from "../../masks";

type FormValues = {
  nome: string;
  descricao: string;
  preco: string;
  estoque: number;
  categoria: string;
  dtCompra: string;
  dtMod: string;
  DataValidade: string;
  id: string;
};

export function ProductPage() {
  const [productList, setProductList] = useState([] as FormValues[]);
  const { register, handleSubmit, watch, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setProductList((value) => [...value, data]);
  };

  const dtCompraValue = watch("dtCompra");
  const dtModValue = watch("dtMod");
  const dtValidadeValue = watch("DataValidade");

  useEffect(() => {
    setValue("dtCompra", normalizeDate(dtCompraValue));
  }, [dtCompraValue]);

  useEffect(() => {
    setValue("dtMod", normalizeDate(dtModValue));
  }, [dtModValue]);

  useEffect(() => {
    setValue("DataValidade", normalizeDate(dtValidadeValue));
  }, [dtValidadeValue]);

  return (
    <div id={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome"
          {...register("nome", { required: true, min: 2, maxLength: 50 })}
        />
        <textarea
          {...register("descricao", { required: true, min: 5, maxLength: 100 })}
        />
        <input type="string" placeholder="Preço" {...register("preco", {})} />
        <input
          type="number"
          placeholder="Estoque"
          {...register("estoque", {})}
        />

        <select {...register("categoria", { required: true })}>
          <option value="Alimentação">Alimentação</option>
          <option value="Limpeza">Limpeza</option>
        </select>

        <input
          type="datetime"
          placeholder="Data de compra"
          {...register("dtCompra", {
            required: true,
            maxLength: 8,
            minLength: 10,
          })}
        />

        <input
          type="datetime"
          placeholder="Data da ultima modificação"
          {...register("dtMod", {
            required: true,
            maxLength: 8,
            minLength: 10,
          })}
        />

        <input
          type="datetime"
          placeholder="Data de validade"
          {...register("DataValidade", {
            required: true,
            maxLength: 8,
            minLength: 10,
          })}
        />

        <input
          type="text"
          placeholder="ID"
          {...register("id", { required: true })}
        />

        <button type="submit" className={styles.button}>
          Cadastar
        </button>
      </form>

      <div className={styles.list}>
        <ul>
          {productList.map((value) => {
            return <li key={value.id}>{`${value.nome} ${value.estoque}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
function setValue(arg0: string, arg1: any) {
  throw new Error("Function not implemented.");
}
