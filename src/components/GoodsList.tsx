import {Grid} from '@material-ui/core';

import GoodsItem from './GoodsItem';
import {GoodsType} from "../data/goods";

type GoodsList = {
    goods: GoodsType[]
    setOrder: (goodsItem: any) => void
}

const GoodsList = (props: GoodsList) => {
    const {goods, setOrder} = props;

    return (
        <Grid container spacing={2}>
            {goods.map((item) => (
                <GoodsItem key={item.id} setOrder={setOrder} {...item} />
            ))}
        </Grid>
    );
};

export default GoodsList;