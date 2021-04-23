import styles from './header.module.scss'



export default function Header() {

  return (
    <div className = {styles.header}>
      <div   className= {styles.logoHeader}>
        <a href= "/">
  <img  src ='/images/Logo.png' alt = "logo"/>
  </a>
  </div>
  </div>
  )
}
