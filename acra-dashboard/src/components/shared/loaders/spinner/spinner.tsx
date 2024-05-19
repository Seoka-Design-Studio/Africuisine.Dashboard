'use client' 
import { Fragment } from "react"
import styles from './spinner.module.css'

export const Spinner: React.FC = () => {
    return (
        <Fragment>
            <div className="flex justify-content w-full">
                <div className={styles.loader}></div>
            </div>
        </Fragment>
    )
}
export default Spinner