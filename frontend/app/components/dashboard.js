import Ember from 'ember';
import { inject as service } from '@ember/service';
import Router from '../router';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        console.log(this.number);
        this.set('totalItems', this.number);
        this.set('currentPage', 1);
        this.set('pageLimit', 5);
        console.log(this.pageLimit);
        this.send('goToPage', this.currentPage);
    },
    get totalPages() {
        return Math.ceil(this.totalItems / this.pageLimit);
    },

    get hasPreviousPage() {
        return this.currentPage > 1;
    },

    get hasNextPage() {
        return this.currentPage < this.totalPages;
    },
    get pageNumbers() {
        // Generate an array of page numbers for the pagination buttons
        return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    },
    actions: {
        previousPage: function () {
            if (this.hasPreviousPage) {
                this.set('currentPage', this.currentPage - 1);
                this.send('goToPage', this.currentPage);
            }
        },
        nextPage: function () {
            if (this.hasNextPage) {
                this.set('currentPage', this.currentPage + 1);
                this.send('goToPage', this.currentPage);
            }
        },
        perPageChange: function () {
            var value = document.getElementById("per_page").value;
            this.set('pageLimit', value);
            if (this.oldPageLimit != this.pageLimit) {
                this.send('goToPage', 1);
                this.notifyPropertyChange('totalPages');
                this.notifyPropertyChange('pageNumbers');
            }
        },
        goToPage: async function (value) {

            this.set('currentPage', value);
            var startPos = (value - 1) * this.pageLimit;
            this.set('oldPageLimit', this.pageLimit);
            
            try {
                // Define API endpoint URL
                const apiUrl = `http://localhost:8080/student-lists/${startPos}/${this.pageLimit}`; // Replace with the actual API URL

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
                console.log(data.students);
                // Set data
                this.set('data', data.students);
            } catch (error) {
                // Handle any errors that occur during the form submission
                console.error('Form Submission Error:', error);
            }
            if (this.oldPage) document.getElementById("page" + this.oldPage)?.classList.remove('active');
            document.getElementById("page" + value)?.classList.add('active');
            this.set('oldPage', this.currentPage);
        },
    },
});
