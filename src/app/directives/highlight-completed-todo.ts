import { Directive, effect, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  isCompleted = input(false);
  constructor() {}

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
    }
  });
}
