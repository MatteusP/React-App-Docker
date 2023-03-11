
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CompoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label='Nome' placeholder='Digite o seu nome'/>
      <CampoTexto label='Cargo'  placeholder='Digite o seu cargo'/>
      <CampoTexto label='Imagem'  placeholder='Informe o endereço da imagem'/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
