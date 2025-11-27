
import {useState} from "react";
 export default function OrderForm(){
    const [form, setForm] = useState({
        nome: "",
        telefomo: "",
        ordine: "",
    });


    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/send-order", {
                method: "Post",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(form),


            });
            if(response.ok) {
                alert("Ordine inviato correttamente");
                setForm({nome: "", telefomo: "", ordine: "" })
            }else{
                alert("Errore  durante  l invio");
            }

        }catch(err){
            alert("Errore di connessione al server");
            console.error(err);
        }
    };


     return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Fai un ordine</h2>

      <label>Nome:</label>
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        required
      />

      <label>Telefono:</label>
      <input
        name="telefono"
        value={form.telefono}
        onChange={handleChange}
        required
      />

      <label>Ordine:</label>
      <textarea
        name="ordine"
        value={form.ordine}
        onChange={handleChange}
        required
      ></textarea>

      <button className="cta" type="submit">Invia Ordine</button>
    </form>
  );
}