import React, {Component} from 'react'


class FormFilm extends Component {
constructor(props) {
    super(props);
    this.state = {
      filmname: '',
      posterUrl: '',
      comment: '',
    } 
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this); }
    
    submitForm = (e) => {
        e.preventDefault();
         const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };
        const url = " https://post-a-form.herokuapp.com/api/movies/";
        fetch(url, config)
      .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Added Film ${res}!`);
          }
        }).catch(e => {
          console.error(e);
          alert(`Error during a film addition`);
        });
      }

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });    
      }  
     
    render(){
      return(
        <div className="FormFilm">
        <h1> Film entry</h1>
    
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="filmname">Name of Film</label>
              <input
                type="text"
                id="filmname"
                name="filmname"
                onChange={this.onChange}
                value={this.state.filmname}
              />
            </div>
    
            <div className="form-data">
              <label htmlFor="posterUrl">Poster Url</label>
              <input
                type="text"
                id="posterUrl"
                name="posterUrl"
                onChange={this.onChange}
                value={this.state.posterUrl}
              />
            </div>
    
            <div className="form-data">
              <label htmlFor="comment">Comments</label>
              <textarea id="comment" name="comment" 
              onChange={this.onChange} 
              value={this.state.comment}
              placeholder="why do you like this film? what impressed you in this film?">
              </textarea>
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
          )
    }
}


export default FormFilm;