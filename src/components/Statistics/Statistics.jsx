import styles from "./Statistics.module.css"

export function Statistics ({title, stats}) {
    return (
       <>
        <section class="statistics">
  { title && <h2 class="title">{title}</h2> }

  <ul className={styles.statList}>
    {stats.map((stat) => {
        return (
             <li key={stat.key} class="item">
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}</span>
    </li>
    )  
    })} 
  </ul>
</section>
       </>
    )
}