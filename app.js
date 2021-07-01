
//insert the copied code below this line

axios(config)
.then(function (response) {
  const object = JSON.parse(JSON.stringify(response.data))

  console.dir(object, {depth: null, colors: false})
})
.catch(function (error) {
  console.log(error);
});