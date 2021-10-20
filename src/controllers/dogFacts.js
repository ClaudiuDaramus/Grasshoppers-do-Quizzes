import fetch from "node-fetch"

const  handleDogFacts = async ({}, res) => {
    await fetch(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1`)
    .then(res => res.text())
    .then(data => {
        const { fact } = JSON.parse(data)[0];
        res.send(`Random Dog Facts: ${fact}`);
       })
       .catch(err => console.log(err))
}

export default handleDogFacts;