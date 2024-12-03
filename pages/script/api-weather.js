const cityLon = 6.16;
const cityLat = 49.46;

let linkApi = "https://api.open-meteo.com/v1/forecast?latitude="+cityLat+"&longitude"+cityLon+"&current=temperature_2m";
fetch(linkApi)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données ');
    }
    return response.json();
  })
  .then(data => {
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données météo:', error);
  });
