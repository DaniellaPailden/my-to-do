import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  faTimes = faTimes;
  faEdit = faEdit;

  constructor() {
  }

}
