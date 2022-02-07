const getActivity = () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
      //console.log(data)
      document.getElementById('activity').innerHTML = `
      ${data.activity}
      `
    let hexColor = '#'
    let hexArray = ['0', '1', '2', '3', '4', '5','6' ,'7', '8', '9', 'A', 'B','C', 'D', 'E', 'F']
    for (let i=0; i<6; i++) {
        let randIndex = Math.floor(Math.random()*hexArray.length)
        hexColor += hexArray[randIndex]
    }
    document.body.style.background = hexColor
  } )
}

document.getElementById("btn").addEventListener("click", getActivity )

/*
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("img-container").innerHTML = `
            <img src="${data.message}" />
        `
    })

*/
// OR

/*
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    let pic = document.createElement('img')
    let picDiv = document.getElementById("img-div")
    pic.src = data.message
    picDiv.appendChild(pic)
  });


*/

// ACTIVITIES



