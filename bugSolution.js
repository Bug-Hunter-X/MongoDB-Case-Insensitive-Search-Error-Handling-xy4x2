```javascript
db.collection('users').aggregate([
  { $match: { name: { $exists: true } } }, // Check if the field exists
  { $match: { name: { $regex: /John/i } } } // Case-insensitive search
]).toArray((err, result) => {
  if (err) throw err; // Properly handle errors
  console.log(result); 
  if (result.length === 0) {
    console.log('No users found with the name John.'); // Informative message
  }
});
```
This improved code utilizes MongoDB's aggregation framework. The `$match` operator is used twice:  first to ensure the `name` field exists before performing the case-insensitive search using a regular expression. A more informative message is printed if no matches are found, providing more clarity.