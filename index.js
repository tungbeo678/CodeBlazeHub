function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let islands = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        islands++;
        dfs(grid, i, j);
      }
    }
  }
  return islands;
}
function dfs(grid, i, j) {
  const m = grid.length;
  const n = grid[0].length;
  if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === "0") return;
  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}
