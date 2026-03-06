import styles from "./TimerForm.module.css"

function TimerForm() {
    return (
        <form action="" className={styles.form}>
            <input type="text" name="name" placeholder="Nome"
                className={styles.input} />
            <input type="number" name="duration" placeholder="Duração (segundos)"
                className={styles.input} min="1"/>
            <input type="submit" value="+" className={styles.submitButton}/>
        </form>
    );
}

export default TimerForm;