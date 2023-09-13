import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class CreateStudentController extends Controller {
  @service toast;
  @service router;
  @action
  async addStudent(event) {
    event.preventDefault();

    const newStudent = {
      name: this.name,
      dateOfBirth: new Date(this.dateOfBirth),
      studentClass: this.studentClass ? this.studentClass : 'IT Class',
      year: this.year,
      quarter: this.quarter ? this.quarter : 'Q1',
      mathGrade: parseFloat(this.mathGrade),
      computerGrade: parseFloat(this.computerGrade),
      literatureGrade: parseFloat(this.literatureGrade),
    };
    try {
      // Define your API endpoint URL
      const apiUrl = 'http://localhost:8080/student'; // Replace with your actual API URL

      // Make a POST request using fetch
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(newStudent), // Convert the data to JSON
      });

      // Handle the server response as needed
      console.log('Server Response:', response);
      const data = await response.json();
      if (data.id) {
        this.router.transitionTo('dashboard');
      }
    } catch (error) {
      // Handle any errors that occur during the form submission
      console.error('Form Submission Error:', error);
    }
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateDateOfBirth(event) {
    this.dateOfBirth = event.target.value;
  }

  @action
  updateStudentClass(event) {
    this.studentClass = event.target.value;
  }

  @action
  updateYear(event) {
    this.year = event.target.value;
  }

  @action
  updateQuarter(event) {
    this.quarter = event.target.value;
  }

  @action
  updateMathGrade(event) {
    this.mathGrade = event.target.value;
  }

  @action
  updateComputerGrade(event) {
    this.computerGrade = event.target.value;
  }

  @action
  updateLiteratureGrade(event) {
    this.literatureGrade = event.target.value;
  }
}
