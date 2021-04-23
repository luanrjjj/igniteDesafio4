import { GetStaticProps } from 'next';
import { apiResolver } from 'next/dist/next-server/server/api-utils';
import Prismic from '@prismicio/client'
import { AiOutlineCalendar,AiOutlineUser} from 'react-icons/ai'
import Head from "next/head"
import { getPrismicClient } from '../services/prismic';
import {useState,useEffect} from 'react';
import  Link from 'next/link'

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';
import { useRouter } from 'next/router';

interface Post {
 
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostsProps {
  posts: Post []
}

interface PostPagination {
  next_page: string;
  total_pages:string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({postPagination}) {
  const [count,setCount] = useState(0)
  const [posts,setPosts] = useState([postPagination.posts[count]])
  
console.log(100,postPagination.posts.length)

/*
useEffect(() => {
  if ( count < postPagination.total_pages )
  setPosts([...posts,postPagination.posts[count]])

},[count]) 

console.log(posts)
*/
function loadMore () {
  let countNew = count +1 
  setCount(countNew)
 
 if (countNew < postPagination.posts.length) {
  
   return (
   setPosts([...posts,postPagination.posts[countNew]]))

 } else if (countNew > postPagination.posts.length ) {setPosts([postPagination.posts])
 } else return

}

console.log(300,posts)

  const router = useRouter()
return (

  <>
  <Head>
    <title> Posts| Ignews</title>
  </Head>

  <main className = {styles.container}>
   
    <div className = {styles.posts}> 
    <div className={styles.images}>
      <img src ="/images/Vector.png" alt = "logo"/>
      <div className= {styles.secondimage}>
      <img  src ="/images/spacetraveling.png" alt = "logo"/> 
      </div>  
    </div>
    {posts.map(post => (
      <>
      <Link href = {`/post/${post.slug}`}>
      <a key = {post.slug}>
      <strong>{post.data.title}</strong>
      <p>{post.data.subtitle}</p>
      <div className= {styles.DateAndAuthor}> 
      <AiOutlineCalendar className = { styles.calendaricon }></AiOutlineCalendar>
      <time>{post.first_publication_date}</time>
      <AiOutlineUser className= {styles.usericon}></AiOutlineUser>
      <p>{post.data.author}</p>
      </div>

      </a>
      </Link>
</>
      ))
    }

    {count<postPagination.posts.length-1 ? (
<button className = {styles.LoadMore} onClick = {loadMore}>
  Carregar mais posts
</button>
    )
:null
}
  </div>
  </main>
  </>
    
)
}

export const getStaticProps = async () => {


  const prismic = getPrismicClient();
  
  
  
  const postsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type','post')],
    {
      fetch:['post.title','post.subtitle','post.author','post.content'],
      pageSize:99999
    } 
  ); 

  
  const posts = postsResponse.results.map(post => {
    return {
      slug:post.uid,
      first_publication_date:new Date(post.first_publication_date).toLocaleDateString('pt-br',{
        day:'2-digit',
        month: 'long',
        year: 'numeric'
      }),
  data: {
    title: post.data.title,
    subtitle: post.data.subtitle,
    author: post.data.author,
    }
  }
  })
  
  console.log(100,JSON.stringify(postsResponse,null,2))
  console.log(200,posts)

  const postPagination = {
    posts,
    next_page:postsResponse.next_page,
    total_pages:postsResponse.total_pages
  }

  return {props:{
    postPagination,
    
  },
redirect:60*30}

}
