import { Component } from "react";

import styles from './Card.module.css'

class Card extends Component {
    render() {
        return (
            <>
              <div className={styles.card}>
              <h3 className={styles.heading}>This is card title </h3>
              <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nostrum. Assumenda distinctio ratione officiis iste error ducimus maxime, provident at?</p>
              </div>
            </>
        )
    }
}

export default Card;