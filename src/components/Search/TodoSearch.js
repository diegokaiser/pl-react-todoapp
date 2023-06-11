function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="todo__search">
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        type="text"
        placeholder="Ej. Minar diamante"
      />
    </div>
  );
}

export { TodoSearch };
