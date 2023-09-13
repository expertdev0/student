import { module, test } from 'qunit';
import { setupTest } from 'student-app/tests/helpers';

module('Unit | Route | subject-grades', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:subject-grades');
    assert.ok(route);
  });
});
