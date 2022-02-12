export default function LightInput(props) {
  const handleChange = e => {
    props.onCheckChange(e.target.checked);
  }

  return (
    <fieldset onChange={handleChange}>
      <legend>明亮背景</legend>
      <input type="checkbox" id="box" />
      <label htmlFor="box">開啟</label>
    </fieldset>
  );
}
