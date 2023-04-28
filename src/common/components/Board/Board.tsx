import { type Dispatch, type SetStateAction, type FC } from "react";

interface Props {
  tiles: number[],
  currentPlayer: string,
  setCurrentPlayer: Dispatch<SetStateAction<string>>,
  playerMoves: [number[], number[]],
  setPlayerMoves: Dispatch<SetStateAction<[number[], number[]]>>,
}

const Board: FC<Props> = ({ tiles, setCurrentPlayer, setPlayerMoves, playerMoves, currentPlayer }) => {
  const handleClick = (tile: number) => {
    const [p1,  p2] = playerMoves;
    if (currentPlayer === "x") {
      setPlayerMoves([[...p1, tile], [...p2]]);
      setCurrentPlayer("o");
    }
    else {
      setPlayerMoves([[...p1], [...p2, tile]]);
      setCurrentPlayer("x");
    }
  }
  return (
    <div className="h-50 w-50">
      <div className="grid grid-cols-12 gap-2">
        {tiles.map((tile, index: number) => <div key={index} className="col-span-4">
          <button className="bg-white/10 w-20 h-20 text-white text-lg uppercase font-extrabold" onClick={() => handleClick(tile)}>
            {playerMoves.map((moves, index) => moves.map((move, key) => (move === tile && <div key={key}>{index === 1 ? 'O' : 'X'}</div>)))}
            {/* {playerMoves[1].forEach(moves => )} */}
          </button>
        </div>)}
      </div>
    </div>
  )
}

export default Board;