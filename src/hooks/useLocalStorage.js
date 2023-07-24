import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  //Викликаємо хук useState, який повертає стан state і метод для зміни цього стану setState
  const [state, setState] = useState(() => {
    // console.log('Створюємо початковий стан для email і password в useState');
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  // console.log('state:', state);
  // console.log('setState:', setState);
  // Повертає масив, який потім деструктуризуємо
  return [state, setState];
}
