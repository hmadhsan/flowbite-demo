import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TuiHint, TuiTextfield, } from '@taiga-ui/core';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,   TuiHint,
    TuiInputModule,
    TuiTextfield,
    TuiTextfieldControllerModule,],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  protected readonly testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.error('Form Invalid');
    }
  }
}
