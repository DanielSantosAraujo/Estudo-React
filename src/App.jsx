import Aleatorio from "./components/basicos/Aleatorio"
import ComParametro from "./components/basicos/ComParametro"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Fragmento from "./components/basicos/Fragmento"
import Card from "./components/basicos/Layout/Card"
import Primeiro from "./components/basicos/Primeiro"
import ListaAlunos from "./components/basicos/repeticao/ListaAlunos";
import TabelaProduto from "./components/basicos/repeticao/TabelaProduto";

function App() {

  return (
    <div className="bg-black">
      <h1>Fundamentos React</h1>
      <div className="flex justify-center flex-wrap">

      <Card titulo="#07 - Componente com Filhos" color="green">
        <TabelaProduto/>
        </Card>

      <Card titulo="#06 - Componente com Filhos" color="red">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>


        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}

export default App
