import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    //Set initial subject
    this.set('subject', 'mathematics');
    this.send('updateSubject');
  },
  didReceiveAttrs() {
    this._super(...arguments);
  },
  actions: {
    updateSubject: async function () {
      if (document.getElementById('selectSubject')?.value)
        this.subject = document.getElementById('selectSubject')?.value;
      if (this.subject != this.oldSubject) {
        this.set('oldSubject', this.subject);
        try {
          // Define API endpoint URL
          const apiUrl = `http://localhost:8080/statistics/subject-grades/${this.subject}`; // Replace with the actual API URL

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
          // Set the name for the chart title
          if (this.subject === 'mathematics') this.set('name', 'Math Average');
          else if (this.subject === 'computer_science')
            this.set('name', 'Computer Average');
          else this.set('name', 'Literature Average');
          // Set data
          this.set('data', data);
          // Set chart id
          this.set('dataId', 2);
        } catch (error) {
          // Handle any errors that occur during the form submission
          console.error('Form Submission Error:', error);
        }
      }
    },
  },
});
