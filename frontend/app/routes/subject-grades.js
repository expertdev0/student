import Route from '@ember/routing/route';

export default class SubjectGradesRoute extends Route {
  async model() {
    // Fetch data from the backend API
    const response = await fetch('http://localhost:8080/student-list-number');
    const data = await response.json();
    console.log(data?.number);
    

    // Return the fetched real data
    if (data) return data.number;
    else return null;
  }
}
