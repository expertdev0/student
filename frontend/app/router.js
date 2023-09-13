import EmberRouter from '@ember/routing/router';
import config from 'student-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dashboard', { path: '/' });
  this.route('student-general-average');
  this.route('subject-grades');
  this.route('year-quarter-general-average');
  this.route('create-student');
});
