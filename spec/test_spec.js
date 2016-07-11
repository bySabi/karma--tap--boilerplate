var test = require('tape');

test('beep', function (t) {
  t.plan(2);
  t.equal(2+2,4);
  t.same({a:1,b:2},{a:1,b:1+1});
});

test('beep2', function (t) {
  t.plan(2);
  t.equal(2+2,5);
  t.same({a:1,b:2},{a:1,b:1+1});
});

test('skipped', { skip: true }, function(t) {
  t.fail();
  t.end();
});

test('boop', function (t) {
  t.plan(2);
  t.equal(1+1,2);

  setTimeout(function () {
    t.ok(true);
  }, 1000);
});

test('skipped2', { skip: true }, function(t) {
  t.fail();
  t.end();
});

test('fail', function(t) {
  t.fail();
  t.end();
});
