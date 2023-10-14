export default function NameInput(props) {

  const handleChange = e => {
    props.onNameChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>名稱</legend>
      <select onChange={handleChange}>
        <NameOption name="AC0xRPFS001" />
        <NameOption name="chocomint" />
        <NameOption name="chocomint++" />
        <NameOption name="Stellar" />
        <NameOption name="Fluxline" />
        <NameOption name="Serenitas" />
      </select>
    </fieldset>
  );
}

function NameOption({ name }) {
  return <option value={name}>{name}</option>
}
