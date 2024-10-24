import { Route, Routes } from "react-router-dom";

import { JuegosCrear } from "../Juegos/JuegosCrear";
import { JuegosAdmin } from "../Juegos/JuegosAdmin";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { JuegosActualizados } from "../Juegos/JuegosActualizados";
import { JuegosLista } from"../Juegos/JuegosLista"
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../contenedor/NoEncontrados";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/JuegosCrear" element={<JuegosCrear />} />
      <Route path="/JuegosLista" element={<JuegosLista />} />
      <Route path="/JuegosAdmin" element={<JuegosAdmin />} />
      <Route path="/JuegosActualizados/:codigo" element={<JuegosActualizados />} />

      <Route path="/menuacer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};