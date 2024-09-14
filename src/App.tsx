// src/App.js
import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { GlobalStyle } from './styles/GlobalStyle'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </Provider>
  )
}

export default App
