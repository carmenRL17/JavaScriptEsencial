fetch('http://localhost:3000/contactos/2')
    .then((response) => response.json())
    .then((contacto) => console.log(contacto));

const consumirApi = async() =>{
    const response = await fetch('http://localhost:3000/contactos/1');
    const contacto = await response.json();
    console.log(contacto);
}
consumirApi();