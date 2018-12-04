// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by compile-test.js.
import { name as packageName } from "meteor/compile-test";

// Write your tests here!
// Here is an example.
Tinytest.add('compile-test - example', function (test) {
  test.equal(packageName, "compile-test");
});
