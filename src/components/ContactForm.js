import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../store/contactsSlice'
import styled from 'styled-components'

const FormContainer = styled.div`
  margin-bottom: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin: 5px 0;
`

function ContactForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && phone) {
      dispatch(addContact({ id: Date.now(), name, email, phone }))
      setName('')
      setEmail('')
      setPhone('')
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Adicionar Contato</button>
      </Form>
    </FormContainer>
  )
}

export default ContactForm
