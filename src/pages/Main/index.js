import React, {useState} from 'react';
import {Container} from './styles'

import Header from '../../components/Header'

import api from '../../services/api'


export default function Main() {
  const [posts, setPosts] = useState([])

  async function handlePosts() {
    const data = await api.get('/wp-json/mc/v1/posts?orderby=relevance')
    setPosts(data)
  }
  
  return (
    <Container>
      <Header />
      
      <button onClick={() => handlePosts()}>
        Click me
      </button>
    </Container>
  );
}

