export default function TimeInput(props) {
  const handleChange = e => {
    props.onTimeChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>時間點</legend>
      <input type="text" value={props.default} onChange={handleChange}/>
    </fieldset>
  );
}
