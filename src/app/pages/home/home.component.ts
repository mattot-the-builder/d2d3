import { Component } from '@angular/core';
import { MockupTemplateComponent } from '../../components/mockup-template/mockup-template.component';
import { MockupViewComponent } from '../../components/mockup-view/mockup-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MockupTemplateComponent, MockupViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
