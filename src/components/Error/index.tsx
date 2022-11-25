import "./styles.css";

const Error = ({ error }: any) => {
  return (
    <div className="error-container">
      {error.response.status === 400 ? (
        <h2>Token inválido</h2>
      ) : (
        <h2>Não estamos conseguindo conectar ao servidor</h2>
      )}
    </div>
  );
};

export default Error;
