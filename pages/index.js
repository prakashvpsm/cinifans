import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from '../src/store';
import { serviceWorkerRegister } from '../src/helpers/service-worker-register';
import { getMostViewedPokemonList, getViralPokemonList } from '../src/store/actions/lists';
import Head from 'next/head';
// import SearchAreaContainer from '../src/container-components/search-area';
import TopMovies from '../src/container-components/home/topMovies';
import TopDramas from '../src/container-components/home/topDramas';
import TopSongs from '../src/container-components/home/top-songs';
import TopShortFilms from '../src/container-components/home/top-shoetfilms';

import Slider from '../src/container-components/home/slider.js';
import NewAndUpComing from '../src/container-components/home/upcoming/new-and-upcoming';
import Asian from '../src/container-components/home/top-asian/top-asian';


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
 
    const title = 'Cinifans';

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no' />
        </Head>
        <Slider />

        <div className="cf__home__bottom_container">
          <NewAndUpComing />
          <Asian />

          <div className="cf__content_main_topsection_container">
            <div className="cf__content_main_topsection_head">
              <div>Top from fans</div>
              <div className="cf__border_primary_center_width_100px"></div>
            </div>
           
            <div className="flex items-center cf__content_main_topsection">
              <TopMovies />
              <TopDramas />
              <TopSongs />
              <TopShortFilms />
            </div>
          </div>

        </div>

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
