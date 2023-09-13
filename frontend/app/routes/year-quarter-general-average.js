import Route from '@ember/routing/route';

export default class YearQuarterGeneralAverageRoute extends Route {
  async model() {
    // Fetch data from the backend API
    const response = await fetch('http://localhost:8080/years');
    const data = await response.json();
    console.log(data);
    console.log(data?.years);

    // Return the fetched real data
    if (data) return data.years;
    else return null;
  }
}
