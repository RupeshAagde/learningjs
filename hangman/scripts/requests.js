const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error('Unable to fetch puzzle')
    }
}
//get currentcountry
const getCurrentCountry = async ()=>{
    const location = await getLocation()
    const country = await getCountryDetail(location.country)
    return country
}

//Country Code 
const getCountryDetail = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if(response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }
}

//Ipinfo

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=9bc7cb3ad72ad7')

    if(response.status === 200) {
        return response.json()
    }else {
        throw new Error('Unable to fetch location')
    }
}
