import { module, test } from 'qunit';
import { setupTest } from 'student-app/tests/helpers';

module('Unit | Route | student-general-average', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:student-general-average');
    assert.ok(route);
  });
});
