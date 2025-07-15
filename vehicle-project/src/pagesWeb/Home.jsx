import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import { useState } from "react";
import img8 from "../image/img8.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const [productVehicles, setProductVehicle] = useState([]);
    async function GetProductVehicle() {
        const novosProdutos = [{ name: "gol", licenseplate: "876", price: "20", duration: 2 }];
        setProductVehicle(novosProdutos);
        console.log(productVehicles);

    }
    async function RentVehicles(){
        alert("Alugado com sucesso!!!");
        navigate(0);
    }
    return (
        <div id="container">
            <header>
                <Header />
            </header>
            <section>
                {productVehicles ? productVehicles.map((item, index) => (
                    <div key={index} className="card">
                        <img src={img8} alt="carro" text="carro" />
                        <div>
                            <h4><span style={{color:"blue"}}>Veículo:</span> {item["name"]}</h4>
                            <h4><span style={{color:"blue"}}>Placa:</span>{item["licenseplate"]} </h4>
                            <h4><span style={{color:"blue"}}>Preço:</span> {item["price"]} eth</h4>
                            <h4><span style={{color:"blue"}}>Duração:</span> {item["duration"]} dias</h4>
                        </div>
                        <button onClick={RentVehicles}>Alugar</button>
                    </div>)) : <span style={{ color: "red" }}>* Apertei o botao ao lado para listar os veiculos!!</span>
                }
            </section>
            <aside>
                <Dashboard onClickGetVehicles={GetProductVehicle} />
            </aside>


        </div>
    );
}
export default Home;