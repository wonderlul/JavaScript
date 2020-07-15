//Deklaracja nierozwiązanego sudoku w postaci tablicy, która zawiera dziewięć tablic. Każda z tych dziewięciu tablic reprezentuje wiersz Sudoku.

let puzzle = [
  [7, 0, 4, 8, 0, 0, 3, 0, 1],
  [8, 2, 0, 5, 0, 0, 0, 4, 0],
  [0, 0, 9, 4, 3, 0, 5, 0, 0],
  [3, 1, 0, 0, 0, 0, 8, 0, 7],
  [0, 8, 0, 0, 0, 0, 0, 1, 0],
  [9, 0, 7, 0, 0, 0, 0, 3, 2],
  [0, 0, 6, 0, 1, 5, 4, 0, 0],
  [0, 7, 0, 0, 0, 9, 0, 6, 5],
  [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

function sudokuSolver(puzzle) {
  //nonPossibilites reprezentuje obiekt, w którym przechowywane będą liczby, których nie możemy wpisać w Sudoku.
  let nonPossibilities = {};
  //impossibleNumbers w dalszej części programu będzie tablicą, w której przechowywane będą (w postaci Numberów) liczby, których nie możemy wpisać w Sudoku.
  let impossibleNumbers;
  //emptySpaces będzie reprezentować wszystkie '0' w naszym Sudoku. W momencie deklaracji musi to być po prostu liczba większa niż 0.
  let emptySpaces = 81;

  //Cały solver musi być wykonywany do momentu, kiedy wszystkie 0 w Sudoku zostaną zamienione.
  while (emptySpaces > 0) {
    emptySpaces = 0;
    //Resetujemy emptySpaces do zera, by na koniec pętli, w przypadku gdy '0' nadal będzie występować w Sudoku, zwiększyć emptySpace o 1.
    for (let vert = 0; vert < puzzle.length; vert++) {
      for (let horz = 0; horz < puzzle.length; horz++) {
        if (puzzle[vert][horz] === 0) {
          //Powyższe loopy pozwalają nam na 'dobranie się' do każdego elementu sudoku za pośrednictwem wiersza i kolumny.
          nonPossibilities = {};
          //Przy każdej iteracji musimy resetować obiekt nonPossibilites tak, aby adekwatny był do danego pola.
          for (let i = 0; i < 9; i++) {
            if (puzzle[vert][i] > 0) {
              nonPossibilities[puzzle[vert][i]] = true;
            }
            if (puzzle[i][horz] > 0) {
              nonPossibilities[puzzle[i][horz]] = true;
            }
            //Powyższe ify pozwalają na dopisanie do obiektu nonPossibilites liczb, których nie możemy wpisać ze względu na to, że dana liczba znajduje się już w danym wierszu lub kolumnie.
          }
          for (
            let vertBox = Math.floor(vert / 3) * 3;
            vertBox < Math.floor(vert / 3) * 3 + 3;
            vertBox++
          ) {
            for (
              let horzBox = Math.floor(horz / 3) * 3;
              horzBox < Math.floor(horz / 3) * 3 + 3;
              horzBox++
            ) {
              if (puzzle[vertBox][horzBox]) {
                nonPossibilities[puzzle[vertBox][horzBox]] = true;
              }
            }
            //Sprawdzenie wystąpienia danej liczby w kwadracie 9-polowym. Zabieg Math.floor(vert / 3) * 3 pozwala na ograniczenie warunku tylko do trzech określonych kolumn.
            //Analogicznie Math.floor(vert / 3) * 3 pozwala na ograniczenie warunku tylko do trzech określonych wierszy, co razem daje nam dziewięć pól.
            //Ponownie, jeżeli liczba znajduje się już w danych dziewięciu polach, zostaje wrzucona do obiektu nonPossibilites.
          }
          impossibleNumbers = Object.keys(nonPossibilities);
          if (impossibleNumbers.length === 8) {
            for (let i = 1; i < 10; i++) {
              if (impossibleNumbers.indexOf(i.toString()) < 0) {
                puzzle[vert][horz] = i;
              }
            }
          } else {
            emptySpaces++;
          }
          //Ostatni if sprawdza czy do naszego Sudoku możemy wpisać tylko jedną liczbę. Pętla for pozwala na 'dobranie się' do liczb od 1 do 9.
          //If w pętli sprawdza, czy nasza liczba znajduje się w tablicy impossibleNumbers. Jeżeli wszystkie warunki zostały spełnione, 0 zostaje zastąpione liczbą.
          //Jeżeli nie, pętla while wykonuje się po raz kolejny
        }
      }
    }
  }
  return puzzle;
}

let mySudoku = sudokuSolver(puzzle);
mySudoku.forEach(row => console.log(row));
