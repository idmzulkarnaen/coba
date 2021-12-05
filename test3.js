/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function replaceUndefinedOrNull(key, value) {
  if (value === null || value === undefined) {
    return undefined;
  }
  
  return value;
}

function result(data) {
  // Your Code Here
  const json = JSON.stringify(data, replaceUndefinedOrNull);
  return json;
  
}

console.log(result(data));
