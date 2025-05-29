/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
  readonly contend: string;
  readonly cursosPointed: number;
  readonly unsavedChange: boolean;

  constructor(contend: string, cursosPointed: number, unsavedChange: boolean) {
    this.contend = contend;
    this.cursosPointed = cursosPointed;
    this.unsavedChange = unsavedChange;
  }

  copyWhit({
    contend,
    cursosPointed,
    unsavedChange,
  }: Partial<CodeEditorState>) {
    return new CodeEditorState(
      contend ?? this.contend,
      cursosPointed ?? this.cursosPointed,
      unsavedChange ?? this.unsavedChange
    );
  }

  displayState() {
    console.log(
      this.contend + " - " + this.cursosPointed + " - " + this.unsavedChange
    );
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex = -1;

  save(state: CodeEditorState) {
    if (this.currentIndex < this.history.length - 1) {
      this.history.splice(this.currentIndex + 1);
    }

    this.history.push(state);
    this.currentIndex++;
  }

  undo(): CodeEditorState | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }

    return null;
  }

  redo(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }

    return null;
  }
}

function main() {
  const history = new CodeEditorHistory();
  let editorState = new CodeEditorState("prueba", 43, false);

  history.save(editorState);
  editorState.displayState();

  editorState = editorState.copyWhit({
    cursosPointed: 40,
    unsavedChange: true,
    contend: "prueba",
  });

  history.save(editorState);
  editorState.displayState();

  history.undo()?.displayState();
  
  history.redo()?.displayState();
}

main();
