# Sparse Zip

This package helps align and zip two misaligned input sources. Currently it only supports arrays, but support for 
generators will be implemented soon.

```js
const {sparseZip} = require("sparse-zip");

const admins = [0, 2, 4, 6, "a", "b", "c", 8];
const adminData = [1, 3, 5, 7, 9];

sparseZip(admins, adminData, (admin) => typeof admin === "number") == [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9]
];
```
