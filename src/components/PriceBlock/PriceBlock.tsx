import styles from "./PriceBlock.module.scss";

type Props = {
  id: string;
  name: string;
  price: number;
  volume: number;
  change: number;
};

const PriceBlock: React.FC<Props> = ({ id, name, price, volume, change }) => {
  var changeClassName = change.toString().startsWith("-")
    ? styles.down
    : styles.up;
  change = parseFloat(change.toFixed(8));

  return (
    <section className={styles.container} key={id} data-testid="price-section">
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>${price}</div>
      <div className={styles.volumechange}>
        <div className={styles.volume}>
          <div>volume:</div>
          <div>{volume}</div>
        </div>
        <div className={styles.change}>
          <div>change:</div>
          <div className={changeClassName}>{change}</div>
        </div>
      </div>
    </section>
  );
};

export default PriceBlock;
