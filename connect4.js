class Connect4 {
    constructor(selector) {
        this.rows = 6;
        this.cols = 7;
        this.selector = selector;
        this.createGrid();
    }

    createGrid() {
        const $board = $(this.selector);
        console.log($board);
        for (let row = 0; row < this.rows; row++) {
            const $row = $('<div>')
                .addClass('row');
            for (let col = 0; col < this.cols; col++) {
                const $col = $('<div>')
                    .addClass('col empty');
                $row.append($col);
            }
            $board.append($row);
        }
    }
}