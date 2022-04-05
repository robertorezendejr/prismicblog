
import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';


export function Header() {

  
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logomarca" />
        <nav>
          {/* o link é para não recarregar toda os itens das paginas dando 
          refresh quando muda de uma para outra, exemplo de home para posts */}
          <ActiveLink activeClassName={styles.active} href="/">
            <a >home</a>
          </ActiveLink>
          {/*prefetch é para carregar em background a pagina antes mesmo de entrar nela, 
          no exemplo saido de home para posts. A pasta post ja fica carregada */}
          <ActiveLink activeClassName={styles.active} href="/posts" /* prefetch */>
            <a >Post</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
