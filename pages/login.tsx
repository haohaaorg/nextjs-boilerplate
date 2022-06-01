import styles from 'styles/pages/Login.module.scss'
import * as yup from 'yup'
import Button from 'components/Button'
import { Form, Radio, Input, Password, Select, Rating, Checkbox } from 'components/Form'

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Enter email'),
  password: yup.string().min(8, 'Minium length is 8'),
  rating: yup.number().min(1, 'Minium of 1').required('We need rating dude.'),
  color: yup.string().required('Please select a color'),
})

const Login = () => {
  const defaults = {
    email: 'alice@domain.com',
    password: 'alicelovesbob',
    rating: 2,
    // color: ['#475569'],
  }

  const colors = [
    { label: 'Slate', value: '#475569' },
    { label: 'Orange', value: '#ea580c' },
  ]

  const genders = [
    { label: 'Men', value: 'men' },
    { label: 'Women', value: 'women' },
  ]

  const items = [
    { label: 'Phone', value: 'phone' },
    { label: 'Tablet', value: 'tablet' },
  ]

  const onSubmit = (values: {}) => {
    console.log(values)
  }

  return (
    <div className={styles.root}>
      <Form className={styles.form} schema={schema} defaults={defaults} onSubmit={onSubmit}>
        <Input name="email" label="Email" placeholder="name@domain.com" />
        <Password name="password" label="Password" placeholder="Enter password" />
        <Rating name="rating" label="How satisfy you are?" />
        <Select name="color" label="Favourite Color" placeholder="Your favourite color" options={colors} />
        <Radio name="gender" label="Gender" options={genders} />
        <Checkbox name="items" label="Items" options={items} />
        <Checkbox name="agree" label={<a href="https://google.com">I agree to terms</a>} />
        <Button type="submit" label="Login" className={styles.submit} />
      </Form>
    </div>
  )
}

export default Login
