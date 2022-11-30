import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from './redux/feature/postSlice'
import logo from './logo.svg';
import './App.css';

function App() {

  const {posts, loading} = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getPosts());
  })
  return (
    <div className="App">
      {posts.map((item)=>(
      <h2>{item.title}</h2>
      ))}
    </div>
  );
}

export default App;
