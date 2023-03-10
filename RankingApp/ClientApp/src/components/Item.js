const Item = ({ item, drag, image }) => {
    return (

            <div className="unranked-cell">
                <img key={`item-${item.id}`}
                    id={`item-${item.id}`}
                    src={image}
                    style={{ cursor: "pointer" }}
                    draggable="true"
                    onDragStart={drag}
                />
            </div>

        )
}

export default Item;