import { useState } from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { IngredientProps } from '../../shared/types/ingredient'
import { Modal } from '../modal'
import { NutritionFacts } from '../nutrition-facts'
import styles from './ingredient.module.css'

export const Ingredient = (props: IngredientProps) => {
  const {
    name,
    image,
    price,
  } = props

  const [isNutritionFactsModalOpen, setIsNutritionFactsModalOpen] = useState(false)

  const handleIngredientClick = () => {
    setIsNutritionFactsModalOpen(true)
  }

  const handleModalClose = () => setIsNutritionFactsModalOpen(false)

  return (
    <>
      <li
        className={styles.root}
        onClick={handleIngredientClick}
      >
        <img className='mr-4 ml-4' src={image} alt={name}/>
        <div className='pt-2'>
          <p className={`${styles.price} text text_type_digits-default`}>
            <span className='mr-2'>{price}</span>
            <CurrencyIcon type='primary'/>
          </p>
          <p className={`${styles.name} text text_type_main-default mt-2`}>{name}</p>
        </div>
      </li>
      {isNutritionFactsModalOpen &&
        <Modal
          isOpen={isNutritionFactsModalOpen}
          onClose={handleModalClose}
        >
          <NutritionFacts
            {...props}
          />
        </Modal>
      }
    </>
  )
}
