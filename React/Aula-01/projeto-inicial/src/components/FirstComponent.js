import SecondComponent from "./SecondComponent";
function FirstComponent(props) {
  return (
    <>
      <div>
        <h1>Meu Primeiro Componente</h1>
        <p>Testando outra coisa</p>
        <SecondComponent name={props.name}></SecondComponent>
      </div>
      <div>
        <p>dasdsada</p>
      </div>
    </>
  );
}

export default FirstComponent;
