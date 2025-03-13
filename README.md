# Landing Page Combogó

## Organização dos componentes
- components
  - Header
    - index.jsx
    - styles.module.css
  - Card
    - index.jsx
    - styles.module.css

index.jsx
```
  import styles from './styles.module.css';
  export function Header() {
    return(
      <header className={styles.container}>
        <h1>Logo</h1>
      </header>
    );
  }
```
styles.module.css
```
  .container {
    display: flex;
    align-itens: center;

    & h1 {
      font-size: 2rem;
    }
  }
```
