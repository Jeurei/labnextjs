import SectionInner from 'containers/section-inner';
import SearchBottom from './search-bottom';
import SearchContainerTop from './search-container-top';

const Search = () => (
  <section className="main__section main__section--search section search">
    <h2 className="section__title visually-hidden">Поиск услуг</h2>
    <SectionInner>
      <SearchBottom />
      <SearchContainerTop />
    </SectionInner>
  </section>
);

export default Search;
