import { useState, useEffect, useRef } from 'react';

const styles = {
  code: {
    display: 'inline-flex',
    padding: 4,
    borderRadius: 4,
    backgroundColor: '#ddd',
    fontWeight: 700,
  },
};

export default function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      console.log('isFirstRender: ', isFirstRender);
      console.log(`Виконується useEffect isFirstRender - ${Date.now()}`);
      isFirstRender.current = false;
      console.log('isFirstRender: ', isFirstRender);
      return;
    }

    console.log(`Виконується useEffect - ${Date.now()}`);
  });

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <p>
        <code style={styles.code}>useEffect</code> цього компонента не
        виконується на першому рендері
      </p>
    </div>
  );
}
