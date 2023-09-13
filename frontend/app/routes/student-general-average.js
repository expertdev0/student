import Route from '@ember/routing/route';

export default class StudentGeneralAverageRoute extends Route {
  async model() {
    // Fetch data from the backend API
    const response = await fetch('http://localhost:8080/student-info');
    const data = await response.json();
    console.log(data?.students);

    // Return the fetched real data
    if (data) return data.students;
    else return null;
  }
}
