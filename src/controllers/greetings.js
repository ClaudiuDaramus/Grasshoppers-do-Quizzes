const handleGreetings = ({params}, res) => {
    let message = "Hello World";
    if(params.name) {
      message += `, ${params.name}!`;
    }
    res.send(message);
}

export default handleGreetings;