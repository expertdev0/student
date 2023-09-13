import { module, test } from 'qunit';
import { setupTest } from 'student-app/tests/helpers';

module('Unit | Controller | create-student', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:create-student');
    assert.ok(controller);
  });
});
