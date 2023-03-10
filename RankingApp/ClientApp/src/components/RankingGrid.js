﻿const RankingGrid = ({ items, images, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionTop = [];
    const cellCollectionMiddle = [];
    const cellCollectionBottom = [];
    const cellCollectionWorst = [];

    const pushCellMarkupToArray = (cellCollection, rankNum, rowLabel) => {
        if (rankNum > 0) {
            var item = items?.find(o => o.ranking === rankNum);
            cellCollection.push(
                <div id={`rank-${rankNum}`}
                    className="rank-cell"
                    onDragOver={allowDrop}
                    onDrop={drop}
                >
                    {(item != null) ?
                        <img id={`item-${item.id}`}
                            src={images.find(o => o.id === item.imageId)?.image}
                            draggable="true"
                            onDragStart={drag} />
                        : null
                    }
                </div>
            );
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    const createCellsForRow = (rowNum) => {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 5;

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionTop;
                label = "Top Tier";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionMiddle;
                label = "Middle Tier";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionBottom;
                label = "Bottom Tier";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionWorst;
                label = "Worst Tier";
            }
            pushCellMarkupToArray(currCollection, rankNum, label);
            
        }
    }

    const createCellsForRows = () => {
        const maxRows = 4;

        for (var rowNum = 1; rowNum <= maxRows; rowNum++) {
            createCellsForRow(rowNum);
        }
    }

    const createRowsForGrid = () => {
        rankingGrid.push(<div className="rank-row top-tier">{cellCollectionTop}</div>);
        rankingGrid.push(<div className="rank-row middle-tier">{cellCollectionMiddle}</div>);
        rankingGrid.push(<div className="rank-row bottom-tier">{cellCollectionBottom}</div>);
        rankingGrid.push(<div className="rank-row worst-tier">{cellCollectionWorst}</div>);

        return rankingGrid;
    }

    const createRankingGrid = () => {

        createCellsForRows();
        return createRowsForGrid();
    }

    return (
        <div>
            { createRankingGrid() }
        </div>

        )
}

export default RankingGrid;