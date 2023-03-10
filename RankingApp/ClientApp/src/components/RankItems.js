import React, { useState, useEffect } from 'react';
import MovieImages from './MovieImages';
import RankingGrid from './RankingGrid';
import ItemCollection from './ItemCollection';

const RankItems = () => {

    const [items, setItems] = useState(null);
    const dataType = 1;

    const drag = (event) => {
        event.dataTransfer.setData("text", event.target.id);
    }

    const allowDrop = (event) => {
        event.preventDefault();
    }

    const drop = (event) => {
        event.preventDefault();
        const target = event.target;
        if (target.nodeName === "IMG") {
            return false;
        }
        if (target.childNodes.length === 0) {
            var data = parseInt(event.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === data) ? { ...item, ranking: parseInt(target.id.substring(5)) } : item);
            setItems(transformedCollection);
        }
    }

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
            <main>
                <RankingGrid
                    items={items}
                    images={MovieImages}
                    drag={drag}
                    allowDrop={allowDrop}
                    drop={drop}
                />
                <ItemCollection
                    items={items}
                    drag={drag}
                    images={MovieImages}
                />
            </main>
        )
}

export default RankItems;

//LEFT OFF
https://youtu.be/4RKuyp_bOhY?t=4237