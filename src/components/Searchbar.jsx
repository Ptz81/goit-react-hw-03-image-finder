import { Component } from "react";
import css from './ImageGallery.module.css'
import Notiflix from 'notiflix';


export class Searchbar extends Component {
  state = {
    query: '',
  }

  handleInput = (e) => {
      this.setState({ query: e.currentTarget.value.toLowerCase() });
  }

  handleSubmit=(e) => {
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

      <span className={css.button_label}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleInput}
      value={this.state.query}
    />
  </form>
</header>
  )
  }
}
