import { Header } from "./elementos_reaproveitaveis.js";
document.head.innerHTML +=
  '<link rel="stylesheet" href="../css/style_header_and_footer.css">';

const header = new Header();

header.showElements();