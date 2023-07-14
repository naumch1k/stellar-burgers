import { ConstructorRow } from '../ConstructorRow'
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
      <ConstructorRow
        isLocked
        type='top'
        ingredient={data[0]}
      />
      <ul className={`${styles.list} custom-scroll`}>
        {data.map(ingredient => (
          <ConstructorRow
            key={ingredient._id}
            ingredient={ingredient}
          />
        ))}
      </ul>
      <ConstructorRow
        isLocked
        type='bottom'
        ingredient={data[0]}
      />
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
