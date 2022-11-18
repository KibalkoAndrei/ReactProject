import { useMemo, useState } from "react";
// import Counter from "./components/Counter";
import './styles/App.css';
// import PostItem from "./components/PostItem";
import Postlist from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
import MyInput from './components/UI/MyInput/MyInput';
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'description'},
        {id: 2, title: 'Piton', body: 'UgaChavisZalipaetSNamiDjointiVzrivaet'},
        {id: 3, title: 'Ruby', body: 'AMoralBlyaTakovaZakatatVsemRykava'},
    ]);

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')




    
    const sortedPosts = useMemo(() => {
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
        
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MyInput
                placeholder='search...'
                value={searchQuery}
                OnChange={e => setSearchQuery(e.target.value)}
            />
            <div>
                <MySelect
                    value={selectedSort}
                    OnChange={sortPosts}
                    defaultValue='Сортировка'
                    option={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>

            {posts.length !== 0
                ? 
                <Postlist remove={removePost} posts={sortedPosts} title={'Spisok1'}/>
                :
                <h2 style={{textAlign: 'center'}}>
                    Посты is undefund
                </h2>
            }
        </div>
    )
}

export default App;
