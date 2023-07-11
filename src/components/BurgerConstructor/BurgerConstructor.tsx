import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/button'
import { IngredientProps } from '../../shared/types/ingredient'
import styles from './BurgerConstructor.module.css'

interface BurgerConstructorProps {
  data: IngredientProps[],
}

export const BurgerConstructor = (props: BurgerConstructorProps) => {
  const { data } = props

  return (
    <section className={`${styles.root} pt-25 pb-10`}>
      <div className={`${styles.lockedItem} ml-8 pr-4`}>
        <ConstructorElement
          type='top'
          text={`Crater Bun N-200i ${'(top)'}`}
          price={117}
          thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
          isLocked
        />
      </div>
      <ul className={`${styles.list} custom-scroll`}>
        {data.map(element => (
          <li
            key={element._id}
            className={`${styles.listItem} mt-4 mb-4`}>
            <DragIcon type="primary"/>
            <ConstructorElement
              text={element.name}
              thumbnail={element.image}
              price={element.price}
            />
          </li>
        ))}
      </ul>
      <div className={`${styles.lockedItem} ml-8 pr-4`}>
        <ConstructorElement
          type='bottom'
          text={`Crater Bun N-200i ${'(bottom)'}`}
          price={117}
          thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
          isLocked
        />
      </div>
      <div className={`${styles.submitGroup} mt-10 pr-4 pl-4`}>
        <span className='text text_type_digits-medium mr-10'>
          610
          {' '}
          <CurrencyIcon type='primary'/>
        </span>
        <Button
          type='primary'
          size='large'
          htmlType='button'
        >
          Place an order
        </Button>
      </div>
    </section>
  )
}
