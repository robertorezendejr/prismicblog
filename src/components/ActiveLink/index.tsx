
// Criando componente para deixar o sublinhado amarelo de quando 
// clicamos de uma pagina para a outra.

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
}



export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath} = useRouter()

//   logica: se o link(asPath) for igual(===) a   rest.href que é o link que passamos em no index do
// Header dentro de componentes(pasta) para mudar de paginas no site. 
// então (?) a classe vai ser activeClassName se não(:) a classe vai estar
// vazia '';

  const className = asPath === rest.href
  ? activeClassName
  : '';

    return (
        <Link { ...rest }>
            {cloneElement(children, {
                className,
            })}
        </Link>
    );
}