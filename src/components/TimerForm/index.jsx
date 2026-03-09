import styles from "./TimerForm.module.css"

function TimerForm({ setTimer }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;

        const newTimer = Object.fromEntries(new FormData(form));
        newTimer.id = Date.now();
        newTimer.duration = parseInt(newTimer.duration)
        console.log(newTimer)
        
        setTimer((timers)=>[...timers, newTimer])

        form.reset();

    }
    return (
        <>
        <form action="" className={styles.form} onSubmit={handleFormSubmit}>
            <input type="text" name="name" placeholder="Nome"
                className={styles.input} />
            <input type="number" name="duration" placeholder="Duração (segundos)"
                className={styles.input} min="1"/>
            <input type="submit" value="+" className={styles.submitButton}/>
        </form>
        <div className={styles.teste}>
            
        </div>
        </>
    );
}

export default TimerForm;