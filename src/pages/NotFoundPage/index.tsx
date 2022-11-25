import Header from "../../components/Header";
import "./styles.css";
import notFound from "../../assets/not-found.svg"

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="container-leftcolumn">
            <h1>Whoooops</h1>
            <h3>Não conseguimos encontrar a página que você procura.</h3>
        </div>
        <div className="container-rightcolumn">
            <img src={notFound} alt="Não encontrado" className="svg" />
        </div>
      </div>
    </>
  );
};

export default NotFound;