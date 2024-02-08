// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const pathFinder = (node, target) => {
//   if (!node) return null;
//   if (node.val === target) return [node.val];

//   const leftPath = pathFinder(node.left, target);
//   const rightPath = pathFinder(node.right, target);

//   if (leftPath !== null) {
//     return [ node.val, ...leftPath ];
//   }
//   if (rightPath !== null) {
//     return [ node.val, ...rightPath ];
//   }
//   return null;
// };

// const walk = (node, target, path) => {
//   if (!node) return false;
//   path.push(node.val);
//   if (node.val === target) {
//     return true;
//   }
//   // Recurse
//   if (walk(node.left, target, path)) {
//     return true;
//   };
//   if (walk(node.right, target, path)) {
//     return true;
//   };
//   // Post
//   path.pop();
//   return false;
// };

// const pathFinder = (node, target) => {
//   const path = [];
//   walk(node, target, path)
//   if (path.length) {
//     return path;
//   } else {
//     return null;
//   }
// }
const pathFinder = (node, target) => {
    if (!node) return null;
    const queue = [[node]];
    while (queue.length > 0) {
        const currentPath = queue.shift();
        const current = currentPath[currentPath.length - 1];
        if (current.val === target) {
            return currentPath.map(node => node.val);
        }
        if (current.left) {
            queue.push([...currentPath, current.left]);
        }
        if (current.right) {
            queue.push([...currentPath, current.right]);
        }
    }
    return null;
}

module.exports = {
    pathFinder,
};
