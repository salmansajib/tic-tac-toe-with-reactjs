/* eslint-disable react/prop-types */
const Cell = ({ id, cell, go, setGo, cells, setCells, winningMessage }) => {
  const handleClick = (e) => {
    // console.log(e.target);
    if (!winningMessage) {
      const taken =
        e.target.firstChild?.classList.contains("circle") ||
        e.target.firstChild?.classList.contains("cross") ||
        e.target.classList.contains("circle") ||
        e.target.classList.contains("cross");

      if (!taken) {
        if (go === "circle") {
          e.target.firstChild.classList.add("circle");
          handleCellChange("circle");
          setGo("cross");
        } else if (go === "cross") {
          e.target.firstChild.classList.add("cross");
          handleCellChange("cross");
          setGo("circle");
        }
      }
    }
  };

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };

  // console.log(cells);

  return (
    <div className="flex size-[105px] items-center justify-center rounded-md bg-gradient-to-tr from-blue-300 via-green-300 to-pink-400">
      <div
        className="flex size-[99px] cursor-pointer items-center justify-center rounded-md bg-slate-950"
        id={id}
        onClick={handleClick}
      >
        <div className={cell}></div>
      </div>
    </div>
  );
};

export default Cell;
