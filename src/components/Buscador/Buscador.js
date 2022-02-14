import React, { Component } from "react";
import store from '../../store/index';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';

//Components
import Movie from '../Movie/Movie';

//Actions
import { getMovies , getMovieDetail , addMovieFavorite , removeMovieFavorite } from '../../actions/index';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    //Hacemos el distpach
    this.props.getMovies(this.state.title)


    //Setear el buscador a vacio
    this.setState({title: ''})
  }

  

  render() {
    const { title } = this.state;
    return (
      <div>
        


        <section id="search-box">
          <form action="#" id="form-search" onSubmit={(e) => this.handleSubmit(e)}>
              {/* Input para buscar */}
              <input  type="text" 
                      placeholder="Search a movie"
                      id="input-search"
                      autoComplete="off"
                      value={title}
                      onChange={(e) => this.handleChange(e)}
              />


              <input type="button" value="Search" id="btn-search" />
          </form>

          {/* Resultados de la busqueda */}
          <div id="results">
              <h4>Result of your search</h4>

              {/* Cada uno de los links  (al map le pasamos un argumento index que solo sirve para dar estilos segun su posicion)*/}
              {/*Si el index es impar se aplicara la clase acent y si no no po*/}
              {
                this.props.movies.map((movie , index=0) => 

                  <div className={index%2 === 0? "result result-acent": "result"}>


                    <Link to={`/movie/${movie.imdbID}`}>
                      <a href="movie.html">{movie.Title}
                        {/*Favorite heart (if this movie is on favorite store array will be changes in fill)*/}
                        {
                          this.props.favorites.some(element => element.imdbID === movie.imdbID)?
                            <i className="bi bi-heart-fill"></i>:
                            <i className="bi bi-heart"></i>
                        }
                        
                      </a>

                      <p>{movie.Year} | {movie.Type}</p>
                    </Link>
                    
                  </div>


                  
                )
              }

              
              

              
              
          </div> 

        </section>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    favorites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
