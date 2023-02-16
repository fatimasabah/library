import { useRouter } from 'next/router';

import ALink from '~/components/features/alink';

function MainMenu() {
    const router = useRouter();
    let path = router.asPath;
    let query = router.query;

    function showAllDemos( e ) {
        let demoItems = document.querySelectorAll( '.demo-item.hidden' );

        for ( let i = 0; i < demoItems.length; i++ ) {
            demoItems[ i ].classList.toggle( 'show' );
        }

        document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
        e.preventDefault();
    }

    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ `megamenu-container ${ path === '/' ? 'active' : '' }` } id="menu-home">
                    <ALink href="/" className="sf-with-ul">Home</ALink>

                    
                </li>
                <li className={ path.indexOf( "/shop" ) > -1 ? 'active' : '' }>
                    <ALink href="/shop/sidebar/list" className="sf-with-ul" scroll={ false }>reasorses</ALink>

                   
                </li>
                <li className={ path.indexOf( "product/" ) > -1 ? 'active' : '' }>
                    <ALink href="/product/default/dark-yellow-lace-cut-out-swing-dress" className="sf-with-ul">books</ALink>

                   
                </li>
                <li className={ path.indexOf( "blog/" ) > -1 ? 'active' : '' }>
                    <ALink href="/blog/classic" className="sf-with-ul">article</ALink>

                 
                </li>
                <li className={ path.indexOf( "pages" ) > -1 ? 'active' : '' }>
                    <ALink href="#" className="sf-with-ul">Pages</ALink>

                    <ul>
                        <li className={ path.indexOf( "pages/about" ) > -1 ? 'active' : '' }>
                            <ALink href="/pages/about" className="sf-with-ul">About</ALink>

                            {/* <ul>
                                <li className={ path.indexOf( "pages/about" ) > -1 && path.indexOf( "pages/about-2" ) === -1 ? 'active' : '' }><ALink href="/pages/about">About 01</ALink></li>
                                
                            </ul> */}
                        </li>
                        <li className={ path.indexOf( "pages/contact" ) > -1 ? 'active' : '' }>
                            <ALink href="/pages/contact" className="sf-with-ul">Contact</ALink>

                         
                        </li>
                        <li className={ path.indexOf( "pages/login" ) > -1 ? 'active' : '' }><ALink href="/pages/login">Login</ALink></li>
                        <li className={ path.indexOf( "pages/faq" ) > -1 ? 'active' : '' }><ALink href="/pages/faq">FAQs</ALink></li>
                        <li className={ path.indexOf( "404" ) > -1 ? 'active' : '' }><ALink href="/404">Error 404</ALink></li>
                    </ul>
                </li>
                
                <li className={ path.indexOf( "element" ) > -1 ? 'active' : '' }>
                    {/* <ALink href="/elements" className="sf-with-ul">Elements</ALink> */}

                    
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;