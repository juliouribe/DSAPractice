/*
Path Finding algo using recursion


# # # # # # E #
#             #
# S # # # # # #

Imagine these 3 strings in an array. How do we traverse using recursion to always
find a path to E from S?

Base conditions
1. Hit a wall
2. Hit the edge
3. Run out of moves (only previous is valid)
4. We hit E


const dir = [
  [-1, 0], [1, 0],
  [0, -1], [0, 1]
]
Inside of a walk function

Define your pre, recurse, post

// Pre
seen[curr.y][curr.x] = true;
path.push(curr);

// Recurse
for (let i 0; i < dir.length; ++i) {
  const [x, y] = dir[i]
  if (walk(maze, wall, {
    x: curr.x + x,
    y: curr.y + y,
  }, end, seen, path)) {
    return true;
  }
}

// Post
path.pop();

Okay so when you take a path in a direction, your recursive call will follow it
until it fails or returns false. If we go in the CSS directions (top, right, down, left)
then we'll follow the top until that fails, then go right until that fails, down, left
until they fail. Once they fail, we pop and go back a step. Can't go back so we go
back up a stack and then try another direction. Eventually we will find the path
but the directions will guide in what order it happens.


*/
