import { Component } from "react";
import css from './ImageGallery.module.css'
import Notiflix from 'notiflix';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

export class Searchbar extends Component {
  state = {
    query: '',
  }

  handleInput(e) {
      this.setState({ query: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return Notiflix.Notify.failure(
      'Please, enter your request.'
    );
    }
    this.props.onSubmit(this.state.query.trim().toLowerCase());
    this.reset();
  };

  reset = () => {
    this.setState({ query: ''});
  };

  render() {
    return (
      <header
        className={css.searchbar} >
        <form
          className={css.form}
          onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={css.button}>
             <IconContext.Provider value={{ color: 'blue', size: '1.2 em' }}>
              <div>
                <FaSearch />
              </div>
   </IconContext.Provider>
      <span className={css.button_label}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleInput}
      value={this.state.query}
    />
  </form>
</header>
  )
  }
}
