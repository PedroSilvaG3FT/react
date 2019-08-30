import React from "react";
import ReactDOM from "react-dom"; //Biblioteca que referencia a plataforma que o react vai rodar

import App from "./App";

//Preenche a div root do arquivo index.html com o arquivo APP
ReactDOM.render(<App />, document.getElementById("root"));
