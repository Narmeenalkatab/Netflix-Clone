import Movie from "../Movie/Movie";





export default function MoviesList(props) {

<>
  <div id="card">
    {props.data.map((i) => {
      return <Movie data={i} />;
    })}
  </div>
</>;
}
