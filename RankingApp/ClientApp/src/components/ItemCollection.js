import Item from './Item';

const ItemCollection = ({ items, drag, images }) => {

    return (
        <div className="items-not-ranked">
            {items ?
                items?.map((item) => {
                    if (!item.ranking) {
                        return (
                            <Item
                                key={item.Id}
                                item={item}
                                drag={drag}
                                image={images.find(o => o.id === item.imageId)?.image}
                            />
                        )
                    }
                })
                : <h3>Loading...</h3>
            }
        </div>
     )
}

export default ItemCollection;