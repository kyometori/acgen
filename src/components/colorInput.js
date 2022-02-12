export default function ColorInput(props ){
  const handleChange = e => {
    props.onColorChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>顏色</legend>
      <input type="color" value={props.default} onChange={handleChange} />
    </fieldset>
  );
}
