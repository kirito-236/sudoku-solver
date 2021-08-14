export const GRID_SIZE: number = 9;
export const createDefaultGrid: () => number[][] = () => {
    const rows: number[] = [];
    const grid: number[][] = [];    

    for (let i = 0; i < GRID_SIZE; i++) { 
        rows.push(0);
    }

    for (let i = 0; i < GRID_SIZE; i++) { 
        grid.push(rows.slice());
    }

    return grid;
}
