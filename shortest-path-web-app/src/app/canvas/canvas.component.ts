import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent implements AfterViewInit, OnInit {
  
  @ViewChild('canvas') public canvas: ElementRef | undefined;

  private ctx!: CanvasRenderingContext2D | null; 

  ngAfterViewInit(): void
  {
    const canvasEl: HTMLCanvasElement = this.canvas?.nativeElement;
    this.ctx = canvasEl.getContext('2d');
    this.drawHelloWorld();
  }

  ngOnInit(): void
  {
    
  }

  drawHelloWorld() {
    this.ctx!.fillStyle = 'green';
    this.ctx!.fillText('Hello!', 50, 50, 100);
  }
}
