import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Sprechen Sie mit uns!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Profitieren Sie von unseren Diensten und machen Sie sich neuste KI-Technologie zu Nutze: <br />
  Als Neukunde erhalten Sie jetzt 20% Rabatt auf die Einmalzahlung und 5% Rabatt auf die monatlichen Gebühren!</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)
  


export default CTA