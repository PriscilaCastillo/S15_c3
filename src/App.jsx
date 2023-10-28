// import React from 'react'
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Pacientes } from "./Pacientes";
import { Form } from "./Form";
import { useState } from "react";

export const App = () => {

  const [priscilainfo, setPriscilainfo] = useState([]);
  console.log(priscilainfo);

  const priscilaRemove = (id) => {
    const uwu = priscilainfo.filter((paciente) => paciente.id != id);
    console.log(uwu);

    setPriscilainfo(uwu);
  }

  return (

    <div>

      <header>
        <Header />
      </header>

      <Form setPriscilainfo={setPriscilainfo} priscilainfo={priscilainfo} />


      <Pacientes priscilainfo={priscilainfo} priscilaRemove={priscilaRemove} />

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

