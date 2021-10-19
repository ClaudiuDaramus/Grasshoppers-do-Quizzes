const handleGreetings = ({params}, res) => {
    if(params.name) {
      const message = `Hello World, ${params.name}!`;
      res.send(message);
    } else {
      res.send('Hello World');
    }
}

export default handleGreetings;