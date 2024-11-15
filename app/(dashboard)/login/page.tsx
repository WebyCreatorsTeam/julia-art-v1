"use client"

// import "../_style/_pages/_login.scss"
// import AuthBtn from '../_ui/Buttons/AuthBtn/AuthBtn'
// import { LoginInputFileds } from '../_form-fields/login'
// import FormInput from '../_ui/Input/Input'
// import { useFormState } from 'react-dom'
// import { authenticate } from "@/app/lib/dashboard/action/auth"

const Login = () => {
  // const [errorMessage, formAction, isPending] = useFormState(
  //   authenticate,
  //   undefined,
  // );

  return (
    <section className='loginPage_dash'>
      <div className='loginPage_dash__container'>
        <h1>Вход в <br /> Админ-панель</h1>
        {/* <form action={formAction}>
          {LoginInputFileds.map((el, i) => (<FormInput key={i} errorMessage={undefined} type={el.type} placeholder={el.placeholder} name={el.name} autoComp={el.autoComp} />))}
          <AuthBtn btnType={"submit"} btnText="Войти" />
        </form> */}
      </div>
    </section>
  )
}

export default Login;