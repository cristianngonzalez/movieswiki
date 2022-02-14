import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import { getMovies , getMovieDetail , addMovieFavorite , removeMovieFavorite  } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    constructor(props) {
        super(props);


        this.props.getMovieDetail(this.props.match.params.id)
    }


    addFavorite(movie){
      //Enviamos el id al store
      this.props.addMovieFavorite(movie);
    }

    removeMovieFavorite(idMovie){
        this.props.removeMovieFavorite(idMovie);
      }

    render() {
        return (

            <section id="movie-box">
        
                <aside id="img-movie-box">
                    <img src={this.props.movie.Poster} alt="" id="img-movie"/>
                </aside>
                    
                <aside id="box-movie-description">
                    {/* Title and favorite button */}
                    <div class="box-title-movie">
                        <h1>{this.props.movie.Title} 
                          {/* Favorite button  (if this movie is on the favorites store array the button changes)*/}
                          {
                            this.props.favorites.some(element => element.imdbID === this.props.movie.imdbID)?
                                <button id="btn-favorite" onClick={() => this.removeMovieFavorite(this.props.movie.imdbID)}><i class="bi bi-heart-fill"></i></button>:
                                <button id="btn-favorite" onClick={() => this.addFavorite(this.props.movie)}><i class="bi bi-heart"></i></button>
                          }
                          

                        </h1>
                    </div>
                    {/*Descripcion*/}
                    <p>{this.props.movie.Plot}</p>
                    <br></br>
                    {/*Awards*/}
                    <div id="awards-box">
                        <h4>Awards</h4>
                        <p><i class="bi bi-award"></i> {this.props.movie.Awards}</p>
                    </div>
                    

                    <br></br>
                    {/*Any dates*/}
                    <div class="movie-table">
                        <span class="movie-table-title">Year:</span>
                        <span>{this.props.movie.Year}</span>
                    </div>

                    <div class="movie-table">
                        <span class="movie-table-title">Genre:</span>
                        <span>{this.props.movie.Genre}</span>
                    </div>

                    <div class="movie-table">
                        <span class="movie-table-title">Director:</span>
                        <span>{this.props.movie.Director}</span>
                    </div>

                    <div class="movie-table">
                        <span class="movie-table-title">Actors:</span>
                        <span>{this.props.movie.Actors}</span>
                    </div>

                    <div class="movie-table">
                        <span class="movie-table-title">Writer:</span>
                        <span>{this.props.movie.Writer}</span>
                    </div>

                    <div class="movie-table">
                        <span class="movie-table-title">Languages:</span>
                        <span>English</span>
                    </div>
                    {/*Share button*/}
                    <button id="btn-share-movie">Share this movie <i class="bi bi-share-fill"></i></button>

                </aside>

            </section>




        );
    }
}

function mapStateToProps(state) {
    return {
      movies: state.moviesLoaded,
      movie: state.movieDetail,
      favorites: state.moviesFavourites,
    };
  }


function mapDispatchToProps(dispatch) {
    return {
      addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
      getMovies: title => dispatch(getMovies(title)),
      getMovieDetail: id => dispatch(getMovieDetail(id)),
      removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);