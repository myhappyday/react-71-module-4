// import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';

// console.log('undefined || 1:', undefined || 1); //1
// console.log('null || 1:', null || 1); //1
// console.log('0 || 1:', 0 || 1); //1
// console.log('false || true:', false || true); //true

// console.log('undefined ?? 1:', undefined ?? 1); //1
// console.log('null ?? 1:', null ?? 1); //1
// console.log('0 ?? 1:', 0 ?? 1); //0
// console.log('false ?? true:', false ?? true); //false

export default function SignupForm() {
  // const inputState = useState('qwe');
  // console.log('inputState:', inputState);
  // const [email, setEmail] = useState('qwe');

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Пошта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зареєструватись</button>
    </form>
  );
}

// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
