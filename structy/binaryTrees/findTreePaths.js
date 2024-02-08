// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (node) => {
    if (node === null) return [];
    if (node.left === null && node.right === null) return [[node.val]];

    const paths = [];
    let leftPaths = allTreePaths(node.left);
    for (let sub of leftPaths) {
        paths.push([node.val, ...sub])
    }
    let rightPaths = allTreePaths(node.right);
    for (let sub of rightPaths) {
        paths.push([node.val, ...sub])
    }

    return paths;
};

module.exports = {
    allTreePaths,
};
