import Movie from "../Movie/Movie";

export default function MoviesList(props) {

return(

<>
    {props.data.map((data) => {
      return (
        <div id="card">
          <Movie data={data} commentHandler={props.commentHandler} />
        </div>
      );
    })}
  </>

)


}
