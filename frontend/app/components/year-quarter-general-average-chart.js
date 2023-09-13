import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    // Set initial year and quarter
    this.set('quarter', 'Q1');
    if (this.model[0]) {
      this.set('year', this.model[0].year);
      this.send('updateYear');
    }
    
  },
  didReceiveAttrs() {
    this._super(...arguments);
  },
  actions: {
    handleData: async function () {
      if (this.year && this.year != this.oldYear || this.quarter != this.oldQuarter) {
        this.set('oldYear', this.year);
        this.set('oldQuarter', this.quarter);
        try {
          // Define API endpoint URL
          const apiUrl = `http://localhost:8080/statistics/year-quarter/${this.year}/${this.quarter}`; // Replace with the actual API URL

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
          this.set('name', this.year + '-' + this.quarter + ' Average');
          // Set data
          this.set('data', data);
          // Set chart id
          this.set('dataId', 3);

          if (data.status) {
            this.set('status', 'no data');
          } else {
            this.set('status', null);
          }
          console.log(data);
        } catch (error) {
          // Handle any errors that occur during the form submission
          console.error('Form Submission Error:', error);
        }
      }
    },
    updateYear: async function () {
      if (document.getElementById('selectYear')?.value)
        this.year = document.getElementById('selectYear')?.value;
      this.send('handleData');
    },
    updateQuarter: async function () {
      if (document.getElementById('selectQuarter')?.value)
        this.quarter = document.getElementById('selectQuarter')?.value;
      this.send('handleData');
    },
  },
});
