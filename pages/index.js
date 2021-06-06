import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from '../src/store';
import { serviceWorkerRegister } from '../src/helpers/service-worker-register';
import { getMostViewedPokemonList, getViralPokemonList } from '../src/store/actions/lists';
import Head from 'next/head';
import SearchAreaContainer from '../src/container-components/search-area';
import TopMovies from '../src/container-components/home/topMovies';
import TopDramas from '../src/container-components/home/topDramas';

import './styles/home.less';

class Index extends React.Component {
  isUnMounted = false;

  async componentDidMount() {
    serviceWorkerRegister();

    // this will be rendered in client-side
    // for server-side render, use getServerSideProps
    this.props.dispatch(getViralPokemonList());
  }

  componentWillUnmount() {
    this.isUnMounted = false;
  }

  render() {
    const {
      mostViewedPokemonListIsLoading,
      mostViewedPokemonListData,
      mostViewedPokemonListError,
      viralPokemonListIsLoading,
      viralPokemonListData,
      viralPokemonListError
    } = this.props;
    const title = 'Cinefans';

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no' />
        </Head>

        <div style={{ width: '70%', maxWidth: 350, margin: '0 auto 50px', textAlign: 'center' }}>
          <img src='/images/logo.png' alt='logo' style={{ width: '100%' }} />
        </div>

        <SearchAreaContainer />
        <div className="flex items-center cf__content_main_topsection">
            <TopMovies />
            <TopDramas/>
        </div>
       


        <br />

     
      </>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  await context.store.dispatch(getMostViewedPokemonList());
});

const mapStateToProps = (state) => ({
  mostViewedPokemonListIsLoading: state.mostViewedPokemonList.isLoading,
  mostViewedPokemonListData: state.mostViewedPokemonList.data,
  mostViewedPokemonListError: state.mostViewedPokemonList.error,

  viralPokemonListIsLoading: state.viralPokemonList.isLoading,
  viralPokemonListData: state.viralPokemonList.data,
  viralPokemonListError: state.viralPokemonList.error
});

export default connect(mapStateToProps)(Index);
