import styles from '../styles/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Groupten</h1>
      <h2 className={styles.subtitle}>Project Management Services</h2>
      <div className={styles.card}>
        <label>Email</label>
        <input type="email" id="input" placeholder="example@email.com" />
        <label>Password</label>
        <input type="password" id="input" placeholder="**************" />
        <button>Sign In</button>
        <a href="#">Forgot password?</a>
      </div>
    </div>
  );
}
