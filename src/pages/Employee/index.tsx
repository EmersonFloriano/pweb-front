import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

export function EmployeePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => console.log("Cadastrado");
  console.log(errors);

  return (
    <div id={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome"
          {...register("Nome", { required: true, min: 2, maxLength: 20 })}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          {...register("Sobrenome", { required: true, min: 2, maxLength: 50 })}
        />
        <input
          type="email"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Celular"
          {...register("Celular", { required: true, maxLength: 11 })}
        />
        <select
          className={styles.select}
          {...register("Função", { required: true })}
        >
          <option value="Vendedor">Vendedor</option>
          <option value="Entregador">Entregador</option>
          <option value="Gerente">Gerente</option>
        </select>
        <input
          type="number"
          placeholder="Matrícula"
          {...register("Matrícula", { required: true })}
        />
        <input
          type="text"
          placeholder="ID"
          {...register("ID", { required: true })}
        />
        <input
          type="text"
          placeholder="Nome de usuário"
          {...register("Nome de usuário", { required: true })}
        />
        <input
          type="password"
          placeholder="Senha"
          {...register("Senha", { required: true, min: 4 })}
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          {...register("Confirmar senha", { required: true, min: 4 })}
        />

        <button type="submit" className={styles.button}>
          Cadastar
        </button>
      </form>
    </div>
  );
}
