import React, {Component} from 'react'


class FormFilm extends Component {
constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
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
        const url = "https://post-a-form.herokuapp.com/api/movies/";
        fetch(url, config)
      .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`Film Added ${res}!`);
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
              <label htmlFor="title">Name of Film</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
    
            <div className="form-data">
              <label htmlFor="poster">Poster Url</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
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