import { client } from '../constants';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {client.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] cursor-pointer`}
        >
          <img
            src={client.logo}
            alt='logo'
            className='sm:w-[192px] w-[100px] object-contain hover:bg-secondary rounded-lg transition-ease-in-out p-2'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
