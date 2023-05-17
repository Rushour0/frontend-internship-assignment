import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'front-end-internship-assignment-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  formControl: FormControl = new FormControl('');

  @Input() set query(value: string) {
    this.formControl.setValue(value);
  }
  @Output() queryChange = new EventEmitter();
  @Output() querySubmit: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = 'Search for books';

  onSearch() {
    this.querySubmit.emit(this.formControl.value);
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {});
  }
}
