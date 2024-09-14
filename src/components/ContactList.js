import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeContact, editContact } from '../store/contactsSlice'
import styled from 'styled-components'

const ListContainer = styled.div`
  margin-top: 20px;
`

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
`

const EditButton = styled.button`
  margin-left: 5px;
`

function ContactList() {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()

  const handleEdit = (contact) => {
    const updatedName = prompt('Novo nome:', contact.name)
    const updatedEmail = prompt('Novo e-mail:', contact.email)
    const updatedPhone = prompt('Novo telefone:', contact.phone)
    if (updatedName && updatedEmail && updatedPhone) {
      dispatch(
        editContact({
          id: contact.id,
          updatedContact: {
            name: updatedName,
            email: updatedEmail,
            phone: updatedPhone
          }
        })
      )
    }
  }

  return (
    <ListContainer>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <div>
            <strong>{contact.name}</strong>
            <br />
            {contact.email}
            <br />
            {contact.phone}
          </div>
          <div>
            <EditButton onClick={() => handleEdit(contact)}>Editar</EditButton>
            <button onClick={() => dispatch(removeContact(contact.id))}>
              Remover
            </button>
          </div>
        </ContactItem>
      ))}
    </ListContainer>
  )
}

export default ContactList
