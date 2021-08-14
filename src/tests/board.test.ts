import { sudokuSolver } from "../utils/sudokuSolver";
import { GRID_SIZE } from "../utils/createDefaultGrid";

// test case 1, has only one solution
const testGrid = [
    [0, 4, 0, 2, 0, 0, 0, 6, 7],
    [0, 0, 8, 9, 0, 6, 4, 0, 5],
    [0, 0, 0, 5, 0, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 7, 0, 1, 0, 9, 3],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 9, 6, 0, 4, 3, 0, 1],
    [0, 3, 0, 1, 0, 0, 0, 7, 6],
];

const expectedAns = [
    [3, 4, 5, 2, 1, 8, 9, 6, 7], 
    [1, 2, 8, 9, 7, 6, 4, 3, 5], 
    [9, 6, 7, 5, 4, 3, 1, 2, 8], 
    [8, 9, 6, 4, 3, 5, 7, 1, 2], 
    [2, 5, 4, 7, 6, 1, 8, 9, 3], 
    [7, 1, 3, 8, 9, 2, 6, 5, 4], 
    [6, 8, 1, 3, 5, 7, 2, 4, 9], 
    [5, 7, 9, 6, 2, 4, 3, 8, 1], 
    [4, 3, 2, 1, 8, 9, 5, 7, 6],
];

test('solves sudoku', () => {
    expect(sudokuSolver(GRID_SIZE, testGrid)).toStrictEqual(expectedAns);
})