 import { Link } from "react-router-dom";
 import { useForm } from "react-hook-form";
 import { yupResolver } from "@hookform/resolvers/yup";
 import { SchemaRegisterCars } from "../validation/SchemaRegisterCars";

const RegisterVehicle = () => {    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(SchemaRegisterCars)
    });
    
    const onSubmit = async (data) => {   
            console.log(data);
            alert("Cadastrado com sucesso!!!");
            reset();
        
  }

     return (
            <div id="container3">
                <header>
                    <h1 style={{color:"green"}}>Cadastrar Veiculos</h1>
                </header>
                <section>
                    <form>
                        <input type="text" id="name" {...register("name")} placeholder="Nome do Veículo" name="name" />
                        <div style={{ fontSize: "14px", color: "red" }}>{errors.name?.message}</div>
                        <input type="text" id="licenseplate"  {...register("licenseplate")} placeholder="identificador (placa)" name="licenseplate" />
                        <div style={{ fontSize: "14px", color: "red" }}>{errors.licenseplate?.message}</div>
                        <input type="text" id="price" {...register("price")} placeholder="valor do aluguel (ETH)" name="price" />
                        <div style={{ fontSize: "14px", color: "red" }}>{errors.price?.message}</div>
                        <input type="text" id="duration"  {...register("duration")} placeholder="Duração (em dias)" name="duration" />
                        <div style={{ fontSize: "14px", color: "red" }}>{errors.duration?.message}</div>
                    </form>
                    <div id="send_form">
                        <h4 className="btn1" onClick={handleSubmit(onSubmit)}>Cadastrar veículo</h4>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }} > <h4 className="btn2">Voltar</h4></Link>
                    </div>
                </section>

            </div>
        );
    }
    

export default RegisterVehicle;