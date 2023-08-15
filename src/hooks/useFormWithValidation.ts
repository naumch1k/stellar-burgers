import { useState, useCallback, ChangeEvent } from 'react'

interface IFormValues {
  [key: string]: string;
}

interface IFormErrors {
  [key: string]: string;
}

function useFormWithValidation(initialValues: IFormValues) {
  const [values, setValues] = useState<IFormValues>(initialValues)
  const [errors, setErrors] = useState<IFormErrors>({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const name = target.name
    const value = target.value

    setValues({...values, [name]: value})
    setErrors({...errors, [name]: target.validationMessage })
    setIsValid((target.closest('form') as HTMLFormElement).checkValidity())
  }

  const resetForm = useCallback(
    (newValues = initialValues, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid, initialValues]
  )

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  }
}

export default useFormWithValidation
