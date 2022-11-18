import { useRef, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import FormPosts from "./components/FormPosts";
import MyButton from "./components/UI/button/MyButton";
import MyInput from './components/UI/input/MyInput';
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: 'bb', body: 'vv'},
      {id: 2, title: 'aa', body: 'pp'},
      {id: 3, title: 'cc', body: 'aa'},
    ]);
     const [selectedSort, setSelectedSort] = useState('')
     const createPost = (newPost) => {
        setPosts([...posts, newPost])
      }

      const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }
    const sortPosts = (sort) => {
      setSelectedSort(sort);
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }



    

  return (
    <div className="App">
      <FormPosts create ={createPost}/>
      <MySelect
        defaultValue='Сортировка'
        onChange={sortPosts}
        options={[{value: 'title', name: 'По названию'},{ value:'body', name: 'По описанию'}]}
      />
      {posts.length !== 0
      ? <PostList remove={removePost} posts={posts} title='посты про JS'/>
      : <h1 style={{textAlign:'center', marginTop:'35px'}}> постов нет и не будет</h1>
      }
    </div>
  );
}

export default App;
