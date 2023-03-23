// MEU CSS
import styles from './Register.module.css'

// MEUS IMPORTS
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/userAuthentication'
import { wait } from '@testing-library/user-event/dist/utils'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [error, setError] = useState ("")

  const {createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => { 
    e.preventDefault()
    setError("")

    const user = { displayName, email, password }

    if (password !== confirmPassword) {
      setError("As senhas precisam ser identicas!")
      return
    }
    
    const res = await createUser(user)

  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className={`${styles.register} container `}>
        <h1>Cadastre-se para postar seu conteúdo</h1>
        <p>Crie seu usuário e compartilhe suas histórias.</p>
        <form onSubmit={ handleSubmit }>
          <label>
            <span>Nome: </span>
            <input type="text" name="displayName" required placeholder="Nome de usuário"
            value={ displayName }
            onChange={ (e) => setDisplayName(e.target.value) }
            />
          </label>
          <label>
            <span>E-mail: </span>
            <input type="email" name="email" required placeholder="E-mail de acesso"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
          <label>
            <span>Senha: </span>
            <input type="password" name="password" required placeholder="Insira sua senha"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
          <label>
            <span>Conformação de Senha: </span>
            <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha"
            value={ confirmPassword }
            onChange={ (e) => setConfirmPassword(e.target.value) }
            />
          </label>
          { !loading && <button className='btn btn-success my-3'>Cadastrar</button> }
          { loading && <button className='btn btn-success my-3' disabled >Aguarde...</button> }
          
          { error && <p className={`${ styles.error } text-danger`}>{ error }</p> }
        </form>

    </div>
  )
}

export default Register