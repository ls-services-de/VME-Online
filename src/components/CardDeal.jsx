import { meeting } from '../assets';
import styles, { layout } from '../style';
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Buchen Sie ein Meeting <br className='sm:block hidden' /> mit einem Experten.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Nachdem Sie Ihrem individuellen Angebot zugestimmt haben, fangen wir sofort mit der Programmierung Ihrer benötigten Produkte an, sodass wir Sie schnellstmöglich mit fortgeschrittener Software ausstatten können, und Sie zeitnah von unseren Dienstleistungen profitieren können.</p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
          <img src={meeting} alt="meeting" className='w-[100%] h-[100%]' />
      </div>
  </section>
)
 


export default CardDeal