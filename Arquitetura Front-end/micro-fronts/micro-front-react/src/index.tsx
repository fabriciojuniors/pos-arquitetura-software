import r2wc from "@r2wc/react-to-web-component";
import { Teste } from "./components/Teste";

const TesteWC = r2wc(Teste, {
  props: {
    nome: "string"
  }
});

customElements.define("react-teste", TesteWC);