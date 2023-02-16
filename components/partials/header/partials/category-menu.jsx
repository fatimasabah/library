import { useRouter } from 'next/router';

import ALink from '~/components/features/alink';

function CategoryMenu () {
    const query = useRouter().query;

    return (
        <div className="dropdown category-dropdown">
            <ALink href="/shop/sidebar/list" className="dropdown-toggle" title="Browse Categories" scroll={ false }>
                {/* Browse Categories */}
                Browse sections
                <i className="icon-angle-down"></i>
            </ALink>

            <div className="dropdown-menu">
                <nav className="side-nav">
                    <ul className="menu-vertical sf-arrows">
                        <li className={ query.category == 'electronics' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=electronics" scroll={ false }>Engineering</ALink></li>
                        <li className={ query.category == 'gift-idea' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=gift-idea" scroll={ false }>Medicine</ALink></li>
                        <li className={ query.category == 'beds' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=beds" scroll={ false }>the sciences</ALink></li>
                        <li className={ query.category == 'lighting' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=lighting" scroll={ false }>Literature</ALink></li>
                        <li className={ query.category == 'sofas-and-sleeper-sofas' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=sofas-and-sleeper-sofas" scroll={ false }>Languages</ALink></li>
                        <li className={ query.category == 'storage' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=storage" scroll={ false }>the pharmacy</ALink></li>
                        <li className={ query.category == 'armchairs-and-chaises' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=armchairs-and-chaises" scroll={ false }>nursing</ALink></li>
                        <li className={ query.category == 'decoration' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=decoration" scroll={ false }>the law </ALink></li>
                        <li className={ query.category == 'kitchen-cabinets' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=kitchen-cabinets" scroll={ false }>Education</ALink></li>
                        <li className={ query.category == 'coffee-and-tables' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=coffee-and-tables" scroll={ false }>.......</ALink></li>
                        <li className={ query.category == 'furniture' ? 'active' : '' }><ALink href="/shop/sidebar/3cols?category=furniture" scroll={ false }>Computer science and mathematics</ALink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoryMenu; 