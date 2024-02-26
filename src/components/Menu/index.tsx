import {FC, useContext, useMemo} from 'react';
import classnames from 'classnames/bind';
import {ConfigContext, withStandardConfig} from "../hoc/withStandardConfig";
import styles from './Menu.module.scss';

const cn = classnames.bind(styles)

type TMenuProps = {
    menuPositions: { name: string, order: number }[]
}

const Menu: FC<TMenuProps> = ({menuPositions}) => {
    const config = useContext(ConfigContext);

    const currentOrder = useMemo(() => {
        menuPositions.map(meal => ({
            ...meal,
            count: 0
        }))
    }, [menuPositions])

    return (
        <form className={cn('menu')}>
            <ul className={cn('menu__list')}>
                {menuPositions.map(({name, order}) => (
                    <li key={name} className={cn('menu__elem')}>
                        <div className={cn('menu__text')}>{`${order}. ${name}: ${config.price[order as 1 | 2 | 3]}`}</div>
                        <div className={cn('menu__counter', 'counter')}>
                            <button type="button" className={cn('counter__button', 'counter__button_less')}></button>
                            <div className={cn('counter__text')}>{1}</div>
                            <button type="button" className={cn('counter__button', 'counter__button_more')}></button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={cn('menu__result')}>
                <div className={cn('menu__result-text')}>Итог</div>
                <div className={cn('menu__result-price')}>{330}₽</div>
            </div>
            <button className={cn('menu__submit')}>Заказать</button>
        </form>
    )
}

export default withStandardConfig(Menu)
