import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    // Set initial Id
    if (this.model[0]) this.set('id', this.model[0].id);
    this.send('updateId');
  },
  actions: {
    updateId: async function () {
      if (document.getElementById('selectName')?.value) {
        this.id = document.getElementById('selectName')?.value;
      }
      if (this.id != this.oldId) {
        this.set('oldId', this.id);
        try {
          // Define API endpoint URL
          const apiUrl = `http://localhost:8080/statistics/student-per-quarter/${this.id}`; // Replace with the actual API URL

          // Make a GET request using fetch
          const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          });

          // Handle the server response as needed
          console.log('Server Response:', response);
          const data = await response.json();
          // Get the name with student id
          const student = this.model.filter((student) => student.id == this.id);
          this.set('name', student[0].name + "'s Average");
          // Set data
          this.set('data', data);
          // Set chart id
          this.set('dataId', 1);
        } catch (error) {
          // Handle any errors that occur during the form submission
          console.error('Form Submission Error:', error);
        }
      }
    },
  },
});
