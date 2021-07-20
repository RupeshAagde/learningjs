// getCountryDetail('US').then((countryCode) => {
//     console.log(`Country Name : ${countryCode.name}`)
// }).catch((error) => {
//     console.log(`Error : ${error}`)
// })

// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if(response.status === 200) {
//             return response.json()
//         }else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data)=> {
//         return data.puzzle
//     })
// }

//Country Code 
// const getCountryDetail = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) =>{
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error('Unable to fetch data')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }


// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=9bc7cb3ad72ad7').then((response) => {
//         if(response.status === 200) {
//             return response.json()
//         }else {
//             throw new Error('Unable to fetch location')
//         }
//     })
// }

// getLocation().then((location) => {
//     return getCountryDetail(location.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error : ${error}`)
// })

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error : ${error}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(`Error : ${error}`)
// })


// const button = document.createElement('button')

//     // Setup the remove note button
//     button.textContent = 'x'
//     noteEl.appendChild(button)
//     button.addEventListener('click', function () {
//         removeNote(note.id)
//         saveNotes(notes)
//         renderNotes(notes, filters)
//     })