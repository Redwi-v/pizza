import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import pizzaList from '../../Api/pizzaList';
import { IPizzaItem } from '../../models/PizzaItem';

const useFetchPizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = React.useState<IPizzaItem>();

    React.useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const pizza = await pizzaList.getPizzaById(id);
                    setPizza(pizza[0]);
                } catch (error) {
                    error instanceof Error && alert(error.message);
                }
            })();
        }
    }, []);

    return pizza;
};

interface PizzaProps {}
const Pizza: FC<PizzaProps> = (props) => {
    const {} = props;

    const pizza = useFetchPizza();

    if (!pizza) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <>
            <img src={pizza.imageUrl} alt={pizza.name} />
            <h1>{pizza.name}</h1>
        </>
    );
};

export default Pizza;
