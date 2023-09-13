import { module, test } from 'qunit';
import { setupTest } from 'student-app/tests/helpers';

module('Unit | Route | create-student', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:create-student');
    assert.ok(route);
  });
});
