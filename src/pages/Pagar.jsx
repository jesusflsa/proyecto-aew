function Pagar({ carrito }) {
  var compraRealizada = {
    date: new Date().toJSON(),
    products: carrito,
  };

  console.log(compraRealizada.products);
  return <div>Pagar</div>;
}

export default Pagar;
