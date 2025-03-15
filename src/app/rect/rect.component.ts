import { Component, EventEmitter, Input, Output, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() reset = new EventEmitter<{ width: string; height: string }>();
  // onReset() {
  //   console.log('rest');
  //   this.reset.emit({ width: '100', height: '100' });
  // }

  // modern way of two way binding

  size = model.required<{ width: string; height: string }>();
  onReset() {
    this.size.update(() => {
      return { width: '100', height: '100' };
    });
  }
}
