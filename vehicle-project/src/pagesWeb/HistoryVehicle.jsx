import { useState, useEffect } from "react";

const HistoryVehicle = () => {
  const [listVehicleRent, setListVehicleRent] = useState([{ name: "gol", licenseplate: "876", price: "20", duration: 2 }]);
   useEffect(() => {
          async function GetsetListVehicleRent (){
              setListVehicleRent([...listVehicleRent]);
          }
           GetsetListVehicleRent();
  
      },[])

  return (
    <div id="container3">
    <header>
        <h1 style={{color:"green"}}> Meus Alugueis</h1>
    </header>
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <article id="model_card">
        <div style={{ overflowX: "auto", marginTop: "2px" }}>
          <table>
              <>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Veículo</th>
                    <th style={{ textAlign: "center" }}>Placa</th>
                    <th style={{ textAlign: "center" }}>Valor do Aluguel</th>
                    <th style={{ textAlign: "center" }}>Dias alugados</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {listVehicleRent.map((item, index) => (
                    <tr key={index}>
                      <td style={{ textAlign: "center",color:"green",backgroundColor:"white"}}>{item.name}</td>
                      <td style={{ textAlign: "center",color:"blue",backgroundColor:"white"  }}>{item.licenseplate}</td>
                      <td style={{ textAlign: "center" ,color:"green" ,backgroundColor:"white"}}>{item.price}</td>
                       <td style={{ textAlign: "center",color:"blue",backgroundColor:"white" }}>{item.duration}</td>
                                             
                    </tr>
                  ))}
                </tbody>
              </>
            
          </table>
        </div>
      </article>
    </section>
     </div>
  );
};

export default HistoryVehicle;