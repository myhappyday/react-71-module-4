import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  // const [time, setTime] = useState(new Date());
  // lazy state initialization
  // Робимо ініціалізацію: ця функція викликається один раз для того, щоб установити початкове значення стейта
  const [time, setTime] = useState(() => new Date());
  // useRef викликається один раз при першому рендері і повертає об'єкт, що не змінюється між різними рендерами
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      // console.log('intervalId:', intervalId);
      console.log('Це інтервал кожні 2000ms ' + Date.now());
      setTime(new Date());
    }, 2000);

    // Функція очистки перед останнім рендером при розмонтуванні компонента (почистити за собою)
    return () => {
      console.log('Це функція очищення перед наступним викликом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
  // console.log('intervalId:', intervalId);

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Поточний час: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
