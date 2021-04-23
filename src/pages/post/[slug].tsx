import { GetStaticPaths, GetStaticProps } from 'next';

import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import Header from '../../components/Header'
import head from 'next/head'
import { AiOutlineCalendar,AiOutlineUser} from 'react-icons/ai'
import { BiTimeFive} from 'react-icons/bi';


interface Post {
  first_publication_date: string | null;
  last_publication_date: string |null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({post}:PostProps) {
 


  const totalTimeReading =  () => { 
  let totalWord
  let totalTime
  
   post.data.content.map(item => {
    totalWord += item.body[0].text

  })
  totalTime = Math.ceil(totalWord.toString().length/200)
return totalTime
}
  

 const totalTime = totalTimeReading()



  return (
    <>
    <Header/>
  
  <main className = {styles.container}>
  <img className= {styles.banner} src = {post.data.banner.url} alt = "banner"/>
  
    <article className = {styles.post}>
      <h1 className={styles.title}>{post.data.title}</h1>

      <div className= {styles.DateAndAuthor}> 

      <AiOutlineCalendar className = { styles.calendaricon }></AiOutlineCalendar>
      <time>{post.first_publication_date}</time>
      <AiOutlineUser className= {styles.usericon}></AiOutlineUser>
      <p>{post.data.author}</p>
      <BiTimeFive className= {styles.clockicon}/>
      <p>{totalTime} min</p>

      </div>

      <div className =  {styles.postContent}>
       
        {post.data.content.map(item => {
      return (
        <>
        <div className= {styles.bodyText}>
          <p className = {styles.heading}>
          {item.heading}
          </p>
          <p className = {styles.text}>
            {item.body[0].text}
          </p>
          </div>
          </>
      )
        })}
    </div>
   
    </article>
  </main>

 
   
   </>
  )
  
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();
  //const posts = await prismic.query();

  return {
    paths: [],
    fallback:'blocking'
  }
 };


export const getStaticProps = async ({params}) => {
  
  const {slug} = params
 
  const prismic = getPrismicClient();
  const response = await prismic.getByUID('post',String(slug),{});




  const post = {
    first_publication_date:response.first_publication_date,
    last_publication_date: response.last_publication_date,
    uid:response.uid,
    data: { 
       author:response.data.author,
       title:response.data.title,
       subtitle:response.data.subtitle,
       banner:response.data.banner,
       content:response.data.content.map (item => {
        return {
          heading:item.heading,
          body:item.body
        }
      })
 
  },
   
  }


 
  return {
    props: {
      post
    },
    redirect:60*30,
  }
 };
