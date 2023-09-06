import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  @Input('appHighlight')
  creationDate!: Date;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }
  ngAfterViewInit(): void {
//     Если creationDate < currentDate && creationDate >= currentDate – 14 дней – новый курс (используйте зеленую границу)
// Если creationDate > currentDate – предстоящий курс (используйте синюю границу) (creationDate в данном случае – дата начала курса)
// Остальные случаи – без изменений
    const creationDate = new Date(this.creationDate).getTime();
    const currentDate = new Date().getTime();
    const twoWeeksTime = 14 * 24 * 60 * 60 * 1000;

    if (creationDate < currentDate && creationDate >= currentDate - twoWeeksTime) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '2px solid #43A047');  
    } else if (creationDate > currentDate) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '2px solid #1E88E5');
    }
  }
}
